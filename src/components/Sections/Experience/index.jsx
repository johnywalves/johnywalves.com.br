import React from "react"

import Strings from "components/strings"
import { Header } from "components/Cards"

import { Wrapper } from "./styled"

const SectionExperience = () => {
  return (
    <Wrapper>
      <Header title={Strings.skills.title} light />
      {Strings.experience.list.map(({ institution, description }, index) => (
        <div key={index}>
          <p>{institution}</p>
          <p>{description}</p>
        </div>
      ))}
      {Strings.education.list.map(({ institution, description }, index) => (
        <div key={index}>
          <p>{institution}</p>
          <p>{description}</p>
        </div>
      ))}
    </Wrapper>
  )
}

export default SectionExperience
