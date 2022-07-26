import React from "react"

import { Header } from "components/Cards"
import Strings from "components/strings"

import {
  Wrapper,
  Content,
  AboutMe,
  Line,
  Description,
  Languages,
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
          {Strings.languages.list.map((language, index) => (
            <p key={index}>
              {language.name} <span>({language.proficiency})</span>
            </p>
          ))}
        </Languages>
      </Content>
    </Wrapper>
  )
}

export default SectionAbout
