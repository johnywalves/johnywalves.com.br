const fs = require('fs');

const en = JSON.parse(fs.readFileSync('src/assets/lang/en.json', 'utf8'));
const br = JSON.parse(fs.readFileSync('src/assets/lang/br.json', 'utf8'));

// Build a dictionary of all projects in BR
const brProjects = {};
[...br.projects.list, ...br.projects.outdated].forEach(p => {
  const key = p.sourceCode || p.url || p.name;
  if (key) {
    brProjects[key] = p;
  }
});

// Manual mappings for projects that changed names/URLs
brProjects["https://www.arquivosdaordem.com.br/"] = brProjects["https://www.arquivosdaordem.com.br/"] || {
  name: "Ordem dos Santos contra as Trevas",
  headline: "Web-book episódico e worldbuilding solarpunk",
  description: "Um projeto de literatura e worldbuilding situado em um universo solarpunk otimista, mas misterioso. Construído como um web-book estático otimizado para leitura longa, explora mistérios guiados por personagens onde a magia opera sob lógica rigorosa, matemática e custos fisiológicos.",
  stack: ["Eleventy", "Markdown", "Vanilla CSS"],
  year: 2026,
  image: "tcgrp"
};

brProjects["https://sanguequente.art/"] = brProjects["https://sanguequente.art/"] || brProjects["Sangue Quente"];

function mapProject(enProj) {
  const key = enProj.sourceCode || enProj.url || enProj.name;
  const brProj = brProjects[key];
  
  if (!brProj) {
    console.log("Could not find translation for:", enProj.name);
    return enProj; // Fallback to EN
  }
  
  // Create a new object with EN structure but BR values
  const newProj = {};
  for (const k of Object.keys(enProj)) {
    if (k === 'stack' || k === 'image' || k === 'year' || k === 'imagePosition') {
      newProj[k] = enProj[k]; // Use EN technical details
    } else {
      newProj[k] = brProj[k] || enProj[k]; // Use BR string, fallback to EN
    }
  }
  
  // Specific fixes
  if (newProj.name === 'Use Python') {
    newProj.headline = 'Curso introdutório de Python';
    newProj.description = 'Curso introdutório em Python abordando a configuração do ambiente de desenvolvimento, automação de processos, manipulação, análise e visualização de dados';
  }
  if (newProj.url === 'https://sanguequente.art/') {
    newProj.name = 'Terra Quente'; // Keep the new EN name as it's a proper noun update maybe? Or 'Sangue Quente'? Let's use 'Terra Quente' since en has it.
    newProj.description = 'Uma coleção de crônicas de Lobisomem: O Apocalipse';
  }
  
  return newProj;
}

br.projects.list = en.projects.list.map(mapProject);
br.projects.outdated = en.projects.outdated.map(mapProject);

// Write back to br.json
fs.writeFileSync('src/assets/lang/br.json', JSON.stringify(br, null, 2) + '\n');
console.log('Fixed projects in br.json!');
