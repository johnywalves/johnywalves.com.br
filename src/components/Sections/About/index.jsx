import React from "react"
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
  return (
    <Wrapper>
      <Content>
        <AboutMe>
          <Header title={Strings.aboutMe} light left />
          <Line />
          <Description>{Strings.description}</Description>
        </AboutMe>

        <Languages>
          <li>
            <Header title={Strings.languages.title} light left small fit />
          </li>
          {Strings.languages.list.map((language, index) => (
            <Language key={index}>
              <LanguageName>
                <LanguageIcon /> {language.name} {language.proficiency}
              </LanguageName>
            </Language>
          ))}
        </Languages>

        <Resumes>
          <li>
            <Header title={Strings.resume.title} light left small fit />
          </li>
          {Strings.resume.files.map(({ name, file }, index) => (
            <Resume key={index}>
              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                aria-label={`Download ${name}`}
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
