import React from "react"

import Strings from "components/strings"

import { Wrapper } from "./styled"

const SectionExperience = () => {
  return (
    <Wrapper>
      <h2>{Strings.skills.title}</h2>
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
