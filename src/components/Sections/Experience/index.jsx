import React from "react"

import Strings from "components/strings"
import { Header } from "components/Cards"

import { Wrapper, Types, Skills, Skill, IconWrapper } from "./styled"
import Icons from "./icons"

const SectionExperience = () => {
  const listDraw = Strings.skills.list[0].list

  return (
    <Wrapper>
      <Header title={Strings.skills.title} light />
      <Types>
        {Strings.skills.list.map(({ type }, index) => (
          <li key={index}>{type}</li>
        ))}
      </Types>
      <Skills>
        {listDraw.map(({ title, icon }) => {
          const Icon = Icons[icon]
          return (
            <Skill key={icon}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <p>{title}</p>
            </Skill>
          )
        })}
      </Skills>
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
