import React, { useState } from "react"

import Strings from "components/strings"
import { Header } from "components/Cards"

import {
  Wrapper,
  Content,
  Types,
  Type,
  SkillsWrapper,
  Skills,
  Skill,
  IconWrapper,
  Accordion,
} from "./styled"
import Icons from "./icons"

const SectionExperience = () => {
  const [selectedType, setSelectedType] = useState(0)

  return (
    <Wrapper>
      <Header title={Strings.skills.title} light />
      <Content>
        <Types>
          {Strings.skills.list.map(({ type }, index) => (
            <Type
              key={index}
              selected={selectedType === index}
              onClick={() => setSelectedType(index)}
            >
              {type}
            </Type>
          ))}
        </Types>

        {console.log(selectedType)}

        <SkillsWrapper>
          {Strings.skills.list.map(({ list }, index) => (
            <Skills selected={selectedType === index}>
              {list.map(({ title, icon }, idx) => {
                if (icon) {
                  const Icon = Icons[icon]
                  return (
                    <Skill key={`${index}_${idx}`}>
                      <IconWrapper>
                        <Icon />
                      </IconWrapper>
                      <p>{title}</p>
                    </Skill>
                  )
                } else {
                  return (
                    <Skill key={`${index}_${idx}`}>
                      <p>{title}</p>
                    </Skill>
                  )
                }
              })}
            </Skills>
          ))}
        </SkillsWrapper>
      </Content>
      <Accordion>
        {Strings.experience.list.map(({ institution, description }, index) => (
          <div key={`exp_${index}`}>
            <p>{institution}</p>
            <p>{description}</p>
          </div>
        ))}
        {Strings.education.list.map(({ institution, description }, index) => (
          <div key={`edu_${index}`}>
            <p>{institution}</p>
            <p>{description}</p>
          </div>
        ))}
      </Accordion>
    </Wrapper>
  )
}

export default SectionExperience
