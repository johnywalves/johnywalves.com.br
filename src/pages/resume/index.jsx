import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { ParallaxProvider } from "react-scroll-parallax"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import Button from "components/Button"
import { Download } from "assets/icons"

const titlePage = "Currículos e Cartas de Apresentação"
const descriptionPage = "Selecione a versão desejada"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  width: 100%;
  padding-top: 4rem;
  padding-bottom: 4rem;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;

  h2 {
    color: var(--texts);
    font-size: 1.8rem;
    font-weight: 700;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 450px;

  a {
    text-decoration: none;
  }
`

const ButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: stretch;

  > a:first-child {
    flex-grow: 1;
  }

  .download-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    color: var(--texts);
    border: 2px solid var(--color-line);
    border-radius: 30px;
    transition: 0.25s ease-out;

    &:hover {
      background: var(--highlight);
      border-color: var(--highlight);
      color: var(--white);
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`

const ResumeIndex = () => {
  return (
    <ParallaxProvider>
      <Blueprint content title={titlePage} description={descriptionPage}>
        <Container>
          <Section>
            <h2>Currículos</h2>
            <LinksContainer>
              <ButtonRow>
                <Link to="/resume/br">
                  <Button light>Português (Padrão)</Button>
                </Link>
                <a
                  href="/docs/Johny_W_Alves-Desenvolvedor_Frontend.pdf"
                  download
                  className="download-btn"
                  title="Baixar PDF"
                >
                  <Download />
                </a>
              </ButtonRow>

              <ButtonRow>
                <Link to="/resume/en">
                  <Button light>Inglês (Padrão)</Button>
                </Link>
                <a
                  href="/docs/Johny_W_Alves-Frontend_Engineer.pdf"
                  download
                  className="download-btn"
                  title="Baixar PDF"
                >
                  <Download />
                </a>
              </ButtonRow>

              <ButtonRow>
                <Link to="/resume/full-br">
                  <Button light secondary>
                    Português (Completo)
                  </Button>
                </Link>
                <a
                  href="/docs/Johny_W_Alves-Desenvolvedor_Frontend-Full.pdf"
                  download
                  className="download-btn"
                  title="Baixar PDF"
                >
                  <Download />
                </a>
              </ButtonRow>

              <ButtonRow>
                <Link to="/resume/full-en">
                  <Button light secondary>
                    Inglês (Completo)
                  </Button>
                </Link>
                <a
                  href="/docs/Johny_W_Alves-Frontend_Engineer-Full.pdf"
                  download
                  className="download-btn"
                  title="Baixar PDF"
                >
                  <Download />
                </a>
              </ButtonRow>
            </LinksContainer>
          </Section>

          <Section>
            <h2>Cartas de Apresentação</h2>
            <LinksContainer>
              <ButtonRow>
                <Link to="/cover/br">
                  <Button light>Português</Button>
                </Link>
                <a
                  href="/docs/Johny_W_Alves_Desenvolvedor_Frontend_cover.pdf"
                  download
                  className="download-btn"
                  title="Baixar PDF"
                >
                  <Download />
                </a>
              </ButtonRow>

              <ButtonRow>
                <Link to="/cover/en">
                  <Button light>Inglês</Button>
                </Link>
                <a
                  href="/docs/Johny_W_Alves_Frontend_Engineer_cover.pdf"
                  download
                  className="download-btn"
                  title="Baixar PDF"
                >
                  <Download />
                </a>
              </ButtonRow>
            </LinksContainer>
          </Section>
        </Container>
      </Blueprint>
    </ParallaxProvider>
  )
}

export default ResumeIndex

export const Head = ({ location }) => (
  <Seo location={location} title={titlePage} description={descriptionPage} />
)
