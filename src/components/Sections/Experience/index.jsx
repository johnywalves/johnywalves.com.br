import React, { useState, useMemo, useCallback } from "react"

import Button from "components/Button"
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
  Areas,
  Area,
  Accomplishment,
  Title,
  DateText,
  Descriptions,
  Description,
} from "./styled"
import Icons from "./icons"

const FormatDate = (text) => {
  const date = new Date(text),
    day = date.getDate().toString().padStart(2, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    year = date.getFullYear()
  return `${day}/${month}/${year}`
}

const SectionExperience = () => {
  const [selectedType, setSelectedType] = useState(0)
  const [selectedArea, setSelectedArea] = useState(null)

  const [selectedExperiences, selectedEducations, selectedCourses] = useMemo(
    () => [selectedArea === 1, selectedArea === 2, selectedArea === 3],
    [selectedArea]
  )

  const toggleExperiences = useCallback(() => {
    if (selectedArea === 1) {
      setSelectedArea(null)
    } else {
      setSelectedArea(1)
    }
  }, [selectedArea])

  const toggleEducations = useCallback(() => {
    if (selectedArea === 2) {
      setSelectedArea(null)
    } else {
      setSelectedArea(2)
    }
  }, [selectedArea])

  const toggleCourses = useCallback(() => {
    if (selectedArea === 3) {
      setSelectedArea(null)
    } else {
      setSelectedArea(3)
    }
  }, [selectedArea])

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
              <p>{type}</p>
            </Type>
          ))}
        </Types>
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

        <Areas>
          <Button
            selected={selectedExperiences}
            onClick={toggleExperiences}
            light
          >
            {Strings.experience.title}
          </Button>
          <Button
            selected={selectedEducations}
            onClick={toggleEducations}
            light
          >
            {Strings.education.title}
          </Button>
          <Button selected={selectedCourses} onClick={toggleCourses} light>
            {Strings.courses.title}
          </Button>
        </Areas>
        <Area selected={selectedExperiences}>
          {Strings.experience.list.map(
            ({ title, date, institution, description }, index) => (
              <Accomplishment key={`exp_${index}`}>
                <Title>
                  {title} - {institution}
                </Title>
                <DateText>{date}</DateText>
                <Descriptions>
                  {description.map((text) => (
                    <Description>{text}</Description>
                  ))}
                </Descriptions>
              </Accomplishment>
            )
          )}
        </Area>
        <Area selected={selectedEducations}>
          {Strings.education.list.map(
            ({ title, date, institution, description }, index) => (
              <Accomplishment key={`edu_${index}`}>
                <Title>
                  {title} - {institution}
                </Title>
                <DateText>{date}</DateText>
                <Descriptions>
                  {description.map((text) => (
                    <Description>{text}</Description>
                  ))}
                </Descriptions>
              </Accomplishment>
            )
          )}
        </Area>
        <Area selected={selectedCourses}>
          {Strings.certification.list
            .filter((cert) => ["chartpie", "tools"].includes(cert.icon))
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ date, name, institute }, index) => (
              <Accomplishment key={`course_${index}`}>
                <Title>
                  {name} - {institute}
                </Title>
                <DateText>{FormatDate(date)}</DateText>
              </Accomplishment>
            ))}
        </Area>
      </Content>
    </Wrapper>
  )
}

export default SectionExperience
