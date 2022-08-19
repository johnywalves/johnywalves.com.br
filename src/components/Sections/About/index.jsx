import React from "react"

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
          <Header title={Strings.languages.title} light left small fit />
          {Strings.languages.list.map((language, index) => (
            <Language key={index}>
              <LanguageName>
                {language.name} {language.proficiency}
              </LanguageName>
            </Language>
          ))}
        </Languages>

        <Resumes>
          <Header title={Strings.resume.title} light left small fit />
          {Strings.resume.files.map(({ name, file }, index) => (
            <a key={index} href={file} target="_blank" rel="noreferrer">
              <Resume>
                <Button light secondary={index !== 0}>
                  {name}
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
