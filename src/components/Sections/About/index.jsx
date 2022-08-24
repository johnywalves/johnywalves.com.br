import React from "react"
import { FileDownload } from "@styled-icons/material-rounded/FileDownload"
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
            <a
              key={index}
              href={file}
              target="_blank"
              rel="noreferrer"
              aria-label={`Download ${name}`}
            >
              <Resume>
                <Button light secondary={index !== 0}>
                  <FileDownload /> {name}
                </Button>
              </Resume>
            </a>
          ))}
        </Resumes>
      </Content>
    </Wrapper>
  )
}

export default SectionAbout
