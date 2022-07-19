import React from "react"

import Strings from "components/strings"

import { Wrapper, AboutMe } from "./styled"

const SectionAbout = () => {
  return (
    <Wrapper>
      <AboutMe>
        <h2>{Strings.aboutMe}</h2>
        <p>{Strings.description}</p>
      </AboutMe>
      {Strings.languages.list.map((language, index) => (
        <p key={index}>
          {language.name} <span>({language.proficiency})</span>
        </p>
      ))}
    </Wrapper>
  )
}

export default SectionAbout
