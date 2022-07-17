import React from "react"

import Strings from "components/strings"

import { Wrapper } from "./styled"

const SectionAbout = () => {
  return (
    <Wrapper>
      <h5>{Strings.description}</h5>
      {Strings.languages.list.map((language, index) => (
        <p key={index}>
          {language.name} <span>({language.proficiency})</span>
        </p>
      ))}
    </Wrapper>
  )
}

export default SectionAbout
