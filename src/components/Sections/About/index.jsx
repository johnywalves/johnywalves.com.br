import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Download } from "@styled-icons/evaicons-solid/Download"
import { Language as LanguageIcon } from "@styled-icons/ionicons-solid/Language"

import { Header } from "components/Cards"
import Button from "components/Button"
import Strings from "components/strings"

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

  const { aboutMe, description, languages, resume } = Strings

  return (
    <Wrapper>
      <Content>
        <AboutMe>
          <Header title={aboutMe} light left />
          <Line />
          <Description>{description}</Description>
        </AboutMe>

        <Languages>
          <li>
            <Header title={languages.title} light left small fit />
          </li>
          {languages.list.map((language, index) => (
            <Language key={index}>
              <LanguageName>
                <LanguageIcon /> {language.name} {language.proficiency}
              </LanguageName>
            </Language>
          ))}
        </Languages>

        <Resumes>
          <li>
            <Header title={resume.title} light left small fit />
          </li>
          {resume.files.map(({ name, file }, index) => (
            <Resume key={index}>
              <a
                href={`${siteMetadata.siteUrl}${file}`}
                target="_blank"
                rel="nofollow noreferrer"
                aria-label={`Download ${name.toLowerCase()} ${resume.title.toLowerCase()}`}
              >
                <Button light secondary={index !== 0}>
                  <Download /> {name}
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
