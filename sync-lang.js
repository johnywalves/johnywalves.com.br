const fs = require('fs');

const en = JSON.parse(fs.readFileSync('./src/assets/lang/en.json', 'utf8'));
const br = JSON.parse(fs.readFileSync('./src/assets/lang/br.json', 'utf8'));

// Translation dictionary for new or changed English strings
const translations = {
  "Order of Saints Against Darkness": "Ordem dos Santos contra as Trevas",
  "Episodic web-book and solarpunk worldbuilding": "Web-book episódico e worldbuilding solarpunk",
  "A literature and worldbuilding project set in an optimistic yet mysterious solarpunk universe. Built as a static web-book optimized for long-form reading, it explores character-driven mysteries where magic operates under strict logic, mathematics, and physiological costs.": "Um projeto de literatura e worldbuilding situado em um universo solarpunk otimista, mas misterioso. Construído como um web-book estático otimizado para leitura longa, explora mistérios guiados por personagens onde a magia opera sob lógica rigorosa, matemática e custos fisiológicos.",
  "• Designed a scalable frontend ecosystem for Porto Seguro's brokerage operations using React, Next.js, JavaScript, TypeScript, Recharts and Tailwind CSS, including reusable component libraries that accelerated development by 36% and ensured 100% visual consistency, plus a hybrid SSR/CSR architecture that cut page load times by 36% for high‑volume operations. The CI/CD pipeline (Jenkins) with automated tests (Jest, Playwright) and AWS hosting (S3, CloudFront) ensured that every deployment met performance and reliability standards.": "• Projetei um ecossistema frontend escalável para as operações de corretagem da Porto Seguro usando React, Next.js, JavaScript, TypeScript, Recharts e Tailwind CSS, incluindo bibliotecas de componentes reutilizáveis que aceleraram o desenvolvimento em 36% e garantiram 100% de consistência visual, além de uma arquitetura híbrida SSR/CSR que reduziu o tempo de carregamento em 36% em operações de alto volume. O pipeline CI/CD (Jenkins) com testes automatizados (Jest, Playwright) e hospedagem na AWS (S3, CloudFront) garantiram que cada deploy atendesse aos padrões de performance e confiabilidade."
};

function translateString(str) {
  if (typeof str !== 'string') return str;
  return translations[str] || str;
}

// Extract a flat dictionary from br.json for easy lookup
const brDict = {};

function flattenBrObjects(obj) {
  if (!obj || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    obj.forEach(flattenBrObjects);
  } else {
    // If it's a project/item
    const key = obj.sourceCode || obj.url || obj.name || obj.company || obj.title;
    if (key) {
      if (!brDict[key]) brDict[key] = obj;
    }
    Object.values(obj).forEach(flattenBrObjects);
  }
}

flattenBrObjects(br);

// Special mapping for things that changed names in EN but we want to map to old BR to retain translations
brDict["Order of Saints Against Darkness"] = brDict["https://www.arquivosdaordem.com.br/"] || {};
brDict["Terra Quente"] = brDict["Sangue Quente"] || brDict["https://github.com/johnywalves/sangue-terra-quente"];
brDict["WeFit (outsourcing for Porto Seguro)"] = brDict["WeFit (outsourcing for Porto Seguro)"];

// Deep clone EN and replace with BR strings
function translateObject(enObj) {
  if (!enObj) return enObj;
  if (Array.isArray(enObj)) {
    return enObj.map(translateObject);
  }
  if (typeof enObj === 'object') {
    const key = enObj.sourceCode || enObj.url || enObj.name || enObj.company || enObj.title;
    const brMatch = brDict[key];
    
    const newObj = {};
    for (const [k, v] of Object.entries(enObj)) {
      if (k === 'stack' || k === 'period' || k === 'location' || k === 'year' || k === 'icon' || k === 'image' || k === 'imagePosition') {
        // Keep English data structure or specific fields that are not language dependent, except period/location which might be?
        // Actually, period and location are translated in BR. Let's use BR if available.
        if (brMatch && brMatch[k] !== undefined && k !== 'stack' && k !== 'image' && k !== 'year') {
           newObj[k] = brMatch[k];
        } else {
           newObj[k] = v;
        }
      } else if (typeof v === 'string') {
        if (brMatch && brMatch[k] && translations[v] === undefined) {
          newObj[k] = brMatch[k]; // Use existing BR string
        } else {
          newObj[k] = translateString(v);
        }
      } else if (Array.isArray(v)) {
        // For highlights (array of strings), map them
        if (k === 'highlights' && brMatch && brMatch[k] && brMatch[k].length === v.length) {
           newObj[k] = v.map((item, i) => translations[item] ? translations[item] : brMatch[k][i]);
        } else {
           newObj[k] = translateObject(v);
        }
      } else {
        newObj[k] = translateObject(v);
      }
    }
    
    // Fix specific hardcoded translations that didn't match via dict
    if (newObj.name === 'Use Python') {
      newObj.headline = 'Curso introdutório de Python';
      newObj.description = 'Curso introdutório em Python abordando a configuração do ambiente de desenvolvimento, automação de processos, manipulação, análise e visualização de dados';
    }
    
    if (newObj.name === 'Order of Saints Against Darkness') {
       newObj.name = 'Ordem dos Santos contra as Trevas';
    }

    if (newObj.name === 'Terra Quente') {
       newObj.description = 'Uma coleção de crônicas de Lobisomem: O Apocalipse';
    }

    return newObj;
  }
  
  return enObj;
}

const newBr = translateObject(en);

// Restore overall page structural translations from br (like title, description that are not in arrays)
newBr.home = br.home;
newBr.menu = br.menu;
newBr.resume = br.resume;
newBr.cover = br.cover;
newBr.contact = br.contact;
// For section titles, they are captured correctly if they have 'title' attribute.

fs.writeFileSync('./src/assets/lang/br.json', JSON.stringify(newBr, null, 2) + '\n');
console.log('Successfully updated br.json');
