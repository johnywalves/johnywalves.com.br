---
title: Exemplo React
description: O que você precisa saber de React para falar que sabe algo
date: 2022-02-24 07:34:26 -0300
featuredImage: ./featured/atom-1.jpg
coverImage: /figures/atom-1.jpg
category: React
tags:
  - JavaScript
  - React
published: false
highlight: false  
---

Biblioteca [React](https://reactjs.org/) criada para facilitar a criação de aplicativos para execução no navegador

## Pré-requisitos 

Para começar precisamos dos softwares

* Node, podemos verificar a instalação pelo comando `node -v`;
* NPM, podemos verificar a instalação pelo comando `npm -v`;
* Qualquer IDE com suporte a JavaScript recomendo [VSCode](https://code.visualstudio.com/).

Instalar a ferramenta de auxílio para configuração das ferramenta de construção

```bash
yarn global add create-react-app
# or
npm -g i create-react-app
```

Iniciar projeto pela ferramenta de auxílio

```bash
npx create-react-app medals-olympic
cd medals-olympic
yarn start
```

Projeto vai estar disponível em [localhost:3000](http://localhost:3000)

## Rotas

* Simulação de rotas;
* Redesenho do DOM.

Instalação da biblioteca `react-router-dom` para controle de rotas 

```bash
yarn add react-router-dom
# or
npm i react-router-dom
```

Criar o arquivo `src/routes/Medals.jsx` dentro da pasta indicada, para com o caminho da rota de medalhas

```javascript
import React from 'react'

const Medals = () => {
    return <h1>Medalhas</h1>
}

export default Medals
```

Criar o arquivo `src/routes/Teams.jsx` para com o caminho da rota de times

```javascript
import React from 'react'

const Teams = () => {
    return <h1>Time</h1>
}

export default Teams
```

Alterar o arquivo `src/Apps.js` para aceitar as rotas criadas

```javascript
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Medals from './routes/Medals'
import Teams from './routes/Teams'

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route path="/:team" element={<Teams />}/>
            <Route path="/" element={<Medals />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000) apresentando a rota **medals** e [localhost:3000/sweden](http://localhost:3000/sweden) para apresentar a rota de **teams**, podemos substituir o *sweden* por qualquer conteúdo

## Componentes

* Separação de responsabilidades;
* Propriedades de componentes;
* Desenho no DOM.

Criar o arquivo `src/components/Header/index.jsx` com o conteúdo do que irá se apresentar no topo de todas as telas

```javascript
import React from 'react'

const Header = () => {
    return <header><h1>Header</h1></header>
}

export default Header
```

Criar o arquivo `src/components/Footer/index.jsx` com o conteúdo do que irá se apresentar no rodapé de todas as telas

```javascript
import React from 'react'

const Footer = () => {
    return <footer><h1>Footer</h1></footer>
}

export default Footer
```

Criar o arquivo `src/components/Main/index.jsx`, que irá encapsular as informações das rotas, destaque para o `children` que é todo conteúdo dentro das tags do componente

```javascript
import React from 'react'

const Main = ({ children }) => {
    return <main>{children}</main>
}

export default Main
```

Alterar o arquivo `src/Apps.js` com destaque para a importação e adição do `Header` e `Footer` dentro da tag `Router`  

```javascript
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import Medals from './routes/Medals'
import Teams from './routes/Teams'

function App() {
  return (
    <Router>
      <Header/>
      <Main>
        <Routes>
          <Route path="/:team" element={<Teams />}/>
          <Route path="/" element={<Medals />}/>
        </Routes>
      </Main>
      <Footer/>
    </Router>
  );
}

export default App;
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000) com o conteúdo do header e footer em todos os caminhos

## Estilos

* Construção das classes;
* Alteração do `head`.

Instalação da biblioteca `styled-components` que facilitará o uso de CSS para os componentes

```bash
yarn add styled-components
# or
npm i styled-components
```

Criar o arquivo `src/globalStyles.js` com o CSS Reset, setando as configurações padrão para estilos para o projeto

```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    a,
    a:hover,
    a:visited {
      text-decoration: none;
      color: inherit;
    }
`;
 
export default GlobalStyle;
```

Alterar o arquivo `src/Apps.js`

```javascript
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

import Medals from './routes/Medals'
import Teams from './routes/Teams'

import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Header/>
      <Main>
        <Routes>
          <Route path="/:team" element={<Teams />}/>
          <Route path="/" element={<Medals />}/>
        </Routes>
      </Main>
      <Footer/>
    </Router>
  );
}

export default App;
```

Criar o arquivo `src/components/Header/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.header`
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: calc((100vw - 98rem) / 2);
`

export const Logo = styled.img`
    height: 6rem;
`

export const Title = styled.h1`
    margin-left: 2rem;
    color: #444;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Back = styled.img`
    height: 8rem;
`
```

Alterar o arquivo `src/components/Header/index.jsx`

```javascript
import React from 'react'

import { Wrapper, Content, Logo, Title, Back } from './styles'

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <Logo src='https://olympics.com/en/images/static/beijing-images/header/b2022-logo.svg'/>
                <Title>Medalhas Olimpiadas de Inverno 2022</Title>
            </Content>
            <Back src='https://olympics.com/images/static/beijing-images/header/b2022-mountains-right-v2.svg'/>
        </Wrapper>
    )
}

export default Header
```

Criar o arquivo `src/components/Footer/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.footer`
    height: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: linear-gradient(90deg, #e8edf5 0, #fff 100%);
`

export const Credits = styled.h1`
    text-align: center;
    color: #444;

    & a {
        color: #1c50a1 !important;

        &:hover {
            text-decoration: underline;
        }
    }
`

```

Alterar o arquivo `src/components/Footer/index.jsx`

```javascript
import React from 'react'

import { Wrapper, Credits } from './styles'

const Footer = () => {
    return (
        <Wrapper>
            <Credits>Desenvolvido com amor por <a href="https://johnywalves.com.br/">Johny W. Alves</a></Credits>
        </Wrapper>
    )
}

export default Footer
```

Criar o arquivo `src/components/Main/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.main`
    min-height: calc(100vh - 16rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
```

Alterar o arquivo `src/components/Main/index.jsx`

```javascript
import React from 'react'

import { Wrapper } from './styles'

const Main = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

export default Main
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)

## Listagem de informações (Medalhas)

Renomear o `src/routes/Medals.jsx` para `src/routes/Medals/index.jsx`

```javascript
import React from 'react'

import Header from './Header'
import Row from './Row'

import { Wrapper } from './styles'

const teams = [  
    {
        team: 'norway',
        description: 'Norway',
        gold: 14,
        silver: 7,
        bronze: 8
    },
    {
        team: 'germany',
        description: 'Germany',
        gold: 10,
        silver: 7,
        bronze: 5
    },
    {
        team: 'united-states-of-america',
        description: 'United States of America',
        gold: 8,
        silver: 8,
        bronze: 5
    },
    {
        team: 'sweden',
        description: 'Sweden',
        gold: 7,
        silver: 4,
        bronze: 4
    },
    {
        team: 'china',
        description: 'People`s Republic of China',
        gold: 7,
        silver: 4,
        bronze: 2
    }                
]

const Medals = () => {
    return (
        <Wrapper>
            <Header/>
            {teams.map(team => <Row key={team.team} {...team}/>)}
        </Wrapper>
    )
}

export default Medals
```

Criar o arquivo `src/routes/Medal/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: calc(100vh - 16rem);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)

### Cabeçalho do quadro de medalhas

Criar o arquivo `src/routes/Medal/Header/index.jsx`

```javascript
import React from 'react'

import { Wrapper, Team, Medals, Gold, Silver, Bronze, Total } from './styles'

const MedalsHeader = () => {
    return (
        <Wrapper>
            <Team>Time</Team>
            <Medals>
                <Gold/>
                <Silver/>
                <Bronze/>
                <Total/>
            </Medals>
        </Wrapper>
    )
}

export default MedalsHeader
```

Criar o arquivo `src/routes/Medal/Header/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.div`
    font-size: 2rem;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    color: #fff;
    background-color: #444;
    height: 5rem;
    width: 100%;
    margin: 0 0 0.5rem;
    padding: 0 calc((100% - 88rem) / 2);
`

export const Team = styled.p`
    display: flex;
    align-items: center;
    height: 5rem;
    width: 50rem;
    margin-left: 18rem;
`

export const Medals = styled.div`
    display: flex;
    flex-direction: row;
`

export const Gold = styled.div`
    background-color: #fcc861;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin: 1rem;
`

export const Silver = styled.div`
    background-color: #e5e5e5;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin: 1rem;
`

export const Bronze = styled.div`
    background-color: #dcb386;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin: 1rem;
`

export const Total = styled.div`
    background-color: #fff;
    border-radius: 50%;
    height: 3rem;
    width: 3rem;
    margin: 1rem;
`
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)

### Itens do quadro de medalhas

Criar o arquivo `src/routes/Medal/Row/index.jsx`

```javascript
import React from 'react'
import { Link } from "react-router-dom";

import { Wrapper, Flag, Description, Medal } from './styles'

const MedalsRow = ({ team, description, gold, silver, bronze }) => {
    return (
        <Wrapper>
            <Flag team={team} />
            <Description><Link to={"/" + team}>{description}</Link></Description>
            <Medal>{gold}</Medal>
            <Medal>{silver}</Medal>
            <Medal>{bronze}</Medal>
            <Medal>{gold + silver + bronze}</Medal>
        </Wrapper>
    )
}

export default MedalsRow
```

Criar o arquivo `src/routes/Medal/Row/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 5rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
`

export const Flag = styled.div`
    background-image: url(${({ team }) => "https://www.countryflags.com/wp-content/uploads/" + team + "-flag-png-large.png"});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 5rem;
    width: 18rem;
`

export const Description = styled.p`
    display: flex;
    align-items: center;
    text-align: left;
    height: 5rem;
    width: 50rem;

    &:hover {
        text-decoration: underline;
    }
`

export const Medal = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 5rem;
`
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)

### Links no Cabeçalho da página

Criar o arquivo `src/components/Header/index.js`

```javascript
import React from 'react'
import { Link } from "react-router-dom";

import { Wrapper, Content, Logo, Title, Back } from './styles'

const Header = () => {
    return (
        <Link to="/">
            <Wrapper>
                <Content>
                    <Logo src='https://olympics.com/en/images/static/beijing-images/header/b2022-logo.svg'/>
                    <Title>Medalhas Olimpiadas de Inverno 2022</Title>
                </Content>
                <Back src='https://olympics.com/images/static/beijing-images/header/b2022-mountains-right-v2.svg'/>
            </Wrapper>
        </Link>
    )
}

export default Header
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)

## Listagem de informações (Times)

Vamos listar o detalhe dos países de acordo com o caminho informado

Renomear o `src/routes/Teams.jsx` para `src/routes/Teams/index.jsx` e mudar o conteúdo para adicionar a lista de países, ler a rota e apresentar as informações pela instrução 

```javascript
import React, { useMemo } from 'react'
import { useParams } from "react-router-dom";

import { Wrapper, Flag, Name, Description } from './styles'

const teams = [  
    {
        id: 'norway',
        name: 'Norway',
        description: 'The Norwegian flag is a white-fimbriated blue Nordic cross on a red field. The used colors in the flag are blue, red, white. The proportion of the Norwegian flag is 8:11. The Flag of Norway was adopted in 1821. The first use of the current flag design was in 1821. The last change to the current Norwegian flag design was in 1899.'
    },
    {
        id: 'germany',
        name: 'Germany',
        description: 'The German flag is a horizontal triband. The used colors in the flag are red, yellow, black. The proportion of the German flag is 3:5. The Flag of Germany was adopted in 1918. The first use of the current flag design was in 1848. The last change to the current German flag design was in 1949.'
    },
    {
        id: 'united-states-of-america',
        name: 'United States of America',
        description: 'The United States flag – USA flag – American flag is a flag with thirteen horizontal stripes with 50 white stars in a blue field. The used colors in the flag are blue, red, white. The proportion of the United States flag – USA flag – American flag is 10:19. The Flag of the United States was adopted in 1960. The first use of the current flag design was in 1818. The last change to the current United States flag design was in 1960.'
    },
    {
        id: 'sweden',
        name: 'Sweden',
        description: 'The Swedish flag is a one coloured field with a cross. The used colors in the flag are blue, yellow. The proportion of the Swedish flag is 5:8. The Flag of Sweden was adopted in 1906. The first use of the current flag design was in 1562. The last change to the current Swedish flag design was in 1906.'
    },
    {
        id: 'china',
        name: 'People`s Republic of China',
        description: 'The Chinese flag is a solid flag with four small stars and one bigger star in the upper left corner. The used colors in the flag are red, yellow. The proportion of the Chinese flag is 2:3. The Flag of China was adopted in 1949. The first use of the current flag design was in 1949.'
    }                
]

const Teams = () => {
    const { team } = useParams();

    const { id, name, description } = useMemo(() =>  {
        const current = teams.find(({ id: id_team }) => id_team === team)

        if (current) { 
            return current
        }

        return ({ id: '', name: '', description: '' })
    }, [team])

    return (
        <Wrapper>
            <Name>{name}</Name>
            <Flag id={id}/>
            <Description>{description}</Description>
        </Wrapper>
    )
}

export default Teams
```

Criar o arquivo com estilo `src/routes/Teams/styles.js`

```javascript
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 88rem;
    padding-top: 2rem;
`

export const Name = styled.h1`
    font-size: 3rem;
    margin: 1rem 0;
`

export const Flag = styled.div`
    background-image: url(${({ id }) => "https://www.countryflags.com/wp-content/uploads/" + id + "-flag-png-large.png"});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 18rem;
    width: 30rem;
    margin: 1rem 0;
`

export const Description = styled.p`
    font-size: 2rem;
    margin: 2rem 0 0;
`
```

Com o comando `yarn start` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)

## API

* Explicação da biblioteca `json-server`;
* Explicação da biblioteca `concurrently`;

```bash
yarn add json-server concurrently
# or 
npm i json-server concurrently
```

Adicionar no `package.json` em `scripts`

```javascript
// ...
  "scripts": {
    // ...
    "server": "npx json-server --watch db.json --port 8000",
    "dev": "concurrently \"yarn start\" \"yarn server\""
  }
// ...
```

Criar o arquivo `db.json` na raiz, que irá servir como nosso banco de dados inicial

```javascript
{
    "medals": [
        {
            "team": "norway",
            "description": "Norway",
            "gold": 14,
            "silver": 7,
            "bronze": 8
        },
        {
            "team": "germany",
            "description": "Germany",
            "gold": 10,
            "silver": 7,
            "bronze": 5
        },
        {
            "team": "united-states-of-america",
            "description": "United States of America",
            "gold": 8,
            "silver": 8,
            "bronze": 5
        },
        {
            "team": "sweden",
            "description": "Sweden",
            "gold": 7,
            "silver": 4,
            "bronze": 4
        },
        {
            "team": "china",
            "description": "People`s Republic of China",
            "gold": 7,
            "silver": 4,
            "bronze": 2
        }                
    ],
    "teams": [
        {
            "id": "norway",
            "name": "Norway",
            "description": "The Norwegian flag is a white-fimbriated blue Nordic cross on a red field. The used colors in the flag are blue, red, white. The proportion of the Norwegian flag is 8:11. The Flag of Norway was adopted in 1821. The first use of the current flag design was in 1821. The last change to the current Norwegian flag design was in 1899."
        },
        {
            "id": "germany",
            "name": "Germany",
            "description": "The German flag is a horizontal triband. The used colors in the flag are red, yellow, black. The proportion of the German flag is 3:5. The Flag of Germany was adopted in 1918. The first use of the current flag design was in 1848. The last change to the current German flag design was in 1949."
        },
        {
            "id": "united-states-of-america",
            "name": "United States of America",
            "description": "The United States flag – USA flag – American flag is a flag with thirteen horizontal stripes with 50 white stars in a blue field. The used colors in the flag are blue, red, white. The proportion of the United States flag – USA flag – American flag is 10:19. The Flag of the United States was adopted in 1960. The first use of the current flag design was in 1818. The last change to the current United States flag design was in 1960."
        },
        {
            "id": "sweden",
            "name": "Sweden",
            "description": "The Swedish flag is a one coloured field with a cross. The used colors in the flag are blue, yellow. The proportion of the Swedish flag is 5:8. The Flag of Sweden was adopted in 1906. The first use of the current flag design was in 1562. The last change to the current Swedish flag design was in 1906."
        },
        {
            "id": "china",
            "name": "People`s Republic of China",
            "description": "The Chinese flag is a solid flag with four small stars and one bigger star in the upper left corner. The used colors in the flag are red, yellow. The proportion of the Chinese flag is 2:3. The Flag of China was adopted in 1949. The first use of the current flag design was in 1949."
        }                
    ]
}
```

Alterar o `src/routes/Medals/index.jsx`, para fazer a chamada na API e gerenciar os estados com a resposta

```javascript
import React, { useState, useEffect } from 'react'

import Header from './Header'
import Row from './Row'

import { Wrapper } from './styles'

const Medals = () => {
    const [medals, setMedals] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/medals')
            .then(response => response.json())
            .then(data => setMedals(data));
    }, [])

    return (
        <Wrapper>
            <Header/>
            {medals.map(team => <Row key={team.team} {...team}/>)}
        </Wrapper>
    )
}

export default Medals
```

Alterar o `routes/Teams/index.jsx`, para fazer a chamada na API e gerenciar os estados com a resposta

```javascript
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { Wrapper, Flag, Name, Description } from './styles'

const Teams = () => {
    const { team } = useParams();

    const [current, setCurrent] = useState()

    useEffect(() => {
        fetch(`http://localhost:8000/teams?id=${team}`)
            .then(response => response.json())
            .then(data => data && data.length > 0 && setCurrent(data[0]));
    }, [team])

    if (!current) {
        return (
            <Wrapper>
                <Name>Time não encontrado</Name>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Name>{current.name}</Name>
            <Flag id={current.id}/>
            <Description>{current.description}</Description>
        </Wrapper>
    )
}

export default Teams
```

Com o comando `yarn dev` podemos visualizar a resposta pelo [localhost:3000](http://localhost:3000)
