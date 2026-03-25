import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "components/Cards"
import Button from "components/Button"
import Strings from "components/strings"

import { Download, LanguageIcon } from "assets/icons"

import {
  Wrapper,
  Content,
  AboutMe,
  Line,
  Description,
  Resumes,
  Resume,
  Languages,
  Language,
  LanguageName,
} from "./styled"

const SectionAbout = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const { ui, seo, languages, resume } = Strings

  return (
    <Wrapper>
      <Content>
        <AboutMe>
          <Header title={ui.labels.about} light left />
          <Line />
          <Description dangerouslySetInnerHTML={{ __html: seo.description }} />
        </AboutMe>

        <Languages>
          <li>
            <Header title={languages.title} light left small fit />
          </li>
          {languages.list.map((language, index) => (
            <Language key={index}>
              <LanguageName>
                <LanguageIcon /> {language.name} - {language.proficiency}
              </LanguageName>
            </Language>
          ))}
        </Languages>

        <Resumes>
          <li>
            <Header title={resume.title} light left small fit />
          </li>
          {resume.files.map(({ language, path }, index) => (
            <Resume key={index}>
              <a
                href={`${siteMetadata.siteUrl}${path}`}
                target="_blank"
                rel="nofollow noreferrer"
                aria-label={`Download ${language.toLowerCase()} ${resume.title.toLowerCase()}`}
              >
                <Button light secondary={index !== 0}>
                  <Download /> {language}
                </Button>
              </a>
            </Resume>
          ))}
        </Resumes>
      </Content>
    </Wrapper>
  )
}

export default SectionAbout
