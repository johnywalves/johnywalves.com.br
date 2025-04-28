---
title: Card Game em React (1/?) - Conceito
description: Desenvolvendo um jogo tipo Magic, Digimon e Yu-Gi-Oh! do conceito até a entrega com React (Parte 1 de ?)
date: 2025-06-01 19:57:08 -0300
featuredImage: ./featured/cards-1.jpg
coverImage: figures/cards-1.jpg
category: React
tags:
  - Games
  - Design
  - JavaScript
cheatsheet: false
published: false
---

Um dos meus filmes favoritos é O Feitiço do Tempo (_Groundhog Day_). Ao perceber que ele não estava disponível em nenhum dos serviços de streaming que assino, decidi buscar alternativas para assistir na televisão. Essa busca me levou a um mundo sem volta — repleto de liberdades e possibilidades

**A solução: Home Server**

Descobri que poderia criar **meu próprio provedor local de conteúdo**, acessando todos os serviços que já conheço, mas com **controle total**

Seguindo alguns passos simples, transformei um computador antigo (de 13 anos!) em um centro multimídia completo. Agora, posso:

- Assistir meus filmes e séries favoritos
- Ouvir música
- Jogar Minecraft com minha filha
- Acessar todos os meus arquivos

Todos de qualquer dispositivo na rede local

Foi uma mudança de jogo — e tudo começou com a vontade de reassistir um clássico.

## Ubuntu

Optei pelo **Ubuntu Server 22.04 LTS** como sistema operacional, principalmente devido à:

- Minha familiaridade prévia com a distribuição
- A vasta documentação disponível para suporte
- Compatibilidade com os requisitos do meu hardware

<blockquote>

**Processo de instalação**

Baixei a ISO diretamente do site oficial: ubuntu.com/download/alternative-downloads

- Criei um pendrive bootável usando o **Rufus** (no Windows)
- Executei a instalação padrão

**Configurações essenciais pós-instalação**

- IP fixo: Atribuí um endereço estático para facilitar o acesso permanente na rede local
- Servidores DNS: Configurei manualmente para garantir a resolução adequada de nomes

</blockquote>

## JellyFin - Minha central de mídia

Após avaliar diversas ferramentas, escolhi o **Jellyfin** como solução de servidor de mídia pelos seguintes motivos:

- Interface intuitiva e fácil de usar
- Excelente busca e organização de metadados (posters, sinopses, elenco)
- Multiplataforma (acessível em diversos dispositivos)

Após o processo de configuração e criação das bibliotecas basta adicionar um arquivo na pasta configurada para acessar em todo lugar

<blockquote>

**Instalação Básica**

Seguindo as instruções oficiais disponíveis em: [jellyfin.org/downloads/server](https://jellyfin.org/downloads/server)

Acessível através do navegador em:  
`http://<ip-do-servidor>:8096/web/#/dashboard/libraries`

**Configuração**

Para otimizar a experiência, adotei a seguinte estrutura:

- **Filmes**: Nomes padronizados (mantendo o título original)
- **Séries**
- Outros Arquivos: Organização livre (sem necessidade de metadados)

**Compatibilidade com Dispositivos**

Testado e funcionando em:

- ✅ Navegadores web
- ✅ Android/iOS (aplicativos oficiais)
- ✅ Amazon FireTV
- ✅ LG SmartHub
- ✅ Samsung Tizen ([requer instalação manual](https://github.com/Georift/install-jellyfin-tizen))

</blockquote>

## Minecraft Bedrock - Meu servidor Minecraft

Minha filha é muito ativa, adora brincar e, quando estamos em casa, sempre pede para jogarmos Minecraft juntos. Costumamos criar um novo servidor a cada vez que jogamos

Decidi aproveitar um servidor local para essa atividade. Enquanto exploramos minas e florestas juntos, nos dividimos nas tarefas quando jogamos separadamente: eu cuido da fazenda, da expansão das estradas e da conexão com vilas e pontos interessantes, enquanto ela gerencia as vacas, galinhas e abelhas, criando salas especiais em nossa fortaleza

![Fazenda com vacas, trigo e abobora](/figures/minecraft_farm.jpg "tela do jogo Minecraft apresentando uma plantação e algumas vacas")

Uma situação marcante foi quando, ocupado com outras tarefas, fui ver o que minha filha estava fazendo no jogo e a encontrei com **36 galinhas** – o servidor ainda conseguiu suportar! Foi um momento divertido e memorável.

<blockquote>

Os arquivos do servidor podem ser baixados em: https://www.minecraft.net/en-us/download/server/bedrock

Após descompactar, siga os passos abaixo para configurar o serviço com reinicialização automática:

1. Crie o arquivo de serviço com o comando:

```bash
sudo nano /etc/systemd/system/minecraft_server.service
```

1. Cole a seguinte configuração no arquivo (ajuste os caminhos conforme necessário):

```bash
[Unit]
Description=Minecraft Bedrock Server
Wants=network.target

[Service]
KillMode=none
SuccessExitStatus=0 1
WorkingDirectory=<endereço pasta servidor>
ExecStart=<endereço pasta servidor>/bedrock_server LD_LIBRARY_PATH=. ./bedrock_server >/dev/null 2>&1 &
Restart=on-failure
RestartSec=10
KillMode=process

[Install]
WantedBy=multi-user.target
```

1. Habilite e inicie o serviço com:

```bash
sudo systemctl enable minecraft_server.service
```

1. Para conectar ao servidor:

- **PC/Mobile**: Basta digitar o IP local.
- **Consoles**: Siga os passos adicionais em [BedrockConnect](https://github.com/Pugmatt/BedrockConnect).

</blockquote>

## Samba - Meu armazenamento de arquivos

Com os servidores rodando, ficou chato ficar plugando e desplugando o HD externo só para adicionar vídeos ao Jellyfin. Decidi facilitar minha vida: **compartilhei as pastas necessárias usando o Samba!**

Agora, basta jogar os arquivos na pasta compartilhada e, em **dois minutos**, eles já estão disponíveis em qualquer tela, com os metadados devidamente carregados. Sem cabos, sem espera, sem estresse.

<blockquote>

Como Configurar o Compartilhamento via Samba
Se você também quer simplificar o processo, aqui está um resumo do que fiz:

1. Instale o Samba (se ainda não estiver instalado):

```bash
sudo apt install samba
```

1. Configure o compartilhamento editando o arquivo /etc/samba/smb.conf:

```ini
[JellyfinMedia]
   path = /caminho/da/sua/pasta
   browseable = yes
   read only = no
   guest ok = no
   valid users = seu_usuario
```

1. Reinicie o Samba para aplicar as alterações:

```bash
sudo systemctl restart smbd
```

1. Liberar Samba no filewall:

```bash
ufw allow samba
```

1. Adicione seu usuário ao Samba:

```bash
sudo smbpasswd -a seu_usuario
```

Pronto! Agora você pode acessar a pasta de qualquer dispositivo na rede e adicionar arquivos diretamente, sem precisar ficar transferindo manualmente.

**No Windows**

No Windows 10 ou versões anterior é necessário habilitar o recurso do Windows "SMB 1.0/CIFS", depois facilmente acessível pelo Windows Explorer digital na barra de endereço `\\<ip do servidor>`

</blockquote>

## Futuro do Home Server: Próximos Passos

Estou explorando duas possibilidades interessantes para expandir as funcionalidades do meu servidor:

**Sincronização com nuvem**

- Integrar serviços como Google Drive ou OneDrive para acessar meus arquivos mesmo quando estiver fora de casa
- Isso garantiria backup automático e disponibilidade remota sem depender exclusivamente do armazenamento local

**IA personalizada para automação**

- Treinar um modelo no formato ChatGPT, para atuar como um assistente pessoal
- Objetivo: automatizar tarefas da minha rotina (pessoal e profissional), como organização de agenda, gerenciamento de arquivos ou até mesmo respostas inteligentes para e-mails

Se os testes forem promissores, posso compartilhar os detalhes técnicos e os resultados práticos dessas implementações
