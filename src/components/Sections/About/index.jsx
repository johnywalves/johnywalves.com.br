import React from "react"

import { Header } from "components/Cards"
import Strings from "components/strings"

import {
  Wrapper,
  Content,
  AboutMe,
  Line,
  Description,
  Details,
  Resumes,
  Resume,
  Languages,
  Language,
  LanguageName,
  LanguageProficiency,
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

        <Details>
          <Resumes>
            <Header title={Strings.resume.title} light left />
            {Strings.resume.files.map(({ name, file }, index) => (
              <a key={index} href={file} target="_blank" rel="noreferrer">
                <Resume>{name}</Resume>
              </a>
            ))}
          </Resumes>

          <Languages>
            <Header title={Strings.languages.title} light left />
            {Strings.languages.list.map((language, index) => (
              <Language key={index}>
                <LanguageName>{language.name}</LanguageName>
                <LanguageProficiency>
                  {language.proficiency}
                </LanguageProficiency>
              </Language>
            ))}
          </Languages>
        </Details>
      </Content>
    </Wrapper>
  )
}

export default SectionAbout
