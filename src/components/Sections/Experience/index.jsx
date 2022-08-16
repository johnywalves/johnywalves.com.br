import React, { useState, useMemo, useCallback } from "react"
import { Parallax } from "react-scroll-parallax"

import { Award } from "@styled-icons/fa-solid/Award"
import { Tools } from "@styled-icons/fa-solid/Tools"
import { University } from "@styled-icons/fa-solid/University"
import { ChartPie } from "@styled-icons/fa-solid/ChartPie"
import { Language } from "@styled-icons/ionicons-solid/Language"

import Button from "components/Button"
import Strings from "components/strings"
import { Header } from "components/Cards"

import Triangle from "../Vectors/Triangle"

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
  AreaButton,
  Accomplishment,
  Title,
  Institution,
  DateText,
  Descriptions,
  Description,
  Production,
  WrapperAward,
  BoxShape,
  Icon,
} from "./styled"
import Icons from "./icons"

const FormatDate = (text) => {
  const date = new Date(text),
    month = date.toLocaleString("default", { month: "long" }),
    year = date.getFullYear()
  return `${month.toUpperCase().slice(0, 1)}${month
    .toLowerCase()
    .slice(1, 3)} ${year}`
}

const SectionExperience = () => {
  const [selectedType, setSelectedType] = useState(0)
  const [selectedArea, setSelectedArea] = useState(null)
  const [allExperiences, setAllExperiences] = useState(false)
  const [allCourses, setAllCourses] = useState(false)

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

  const toggleAllExperiences = useCallback(
    () => setAllExperiences(!allExperiences),
    [allExperiences]
  )

  const toggleAllCourses = useCallback(
    () => setAllCourses(!allCourses),
    [allCourses]
  )

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
                  const IconComponent = Icons[icon]
                  return (
                    <Skill key={`${index}_${idx}`}>
                      <IconWrapper>
                        <IconComponent />
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
              <Accomplishment
                key={`exp_${index}`}
                hidden={
                  index > 2 &&
                  Strings.experience.list.length > 4 &&
                  !allExperiences
                }
              >
                <DateText>{date}</DateText>
                <Title>
                  {title}
                  <Institution> | {institution}</Institution>
                </Title>
                <Descriptions list>
                  {description.map((text, idx) => (
                    <Description>
                      <span>
                        {text}
                        {description.length - 1 !== idx ? ";" : "."}
                      </span>
                    </Description>
                  ))}
                </Descriptions>
              </Accomplishment>
            )
          )}
          <AreaButton>
            <Button light onClick={toggleAllExperiences}>
              {allExperiences ? Strings.seeLess : Strings.seeMore}
            </Button>
          </AreaButton>
        </Area>

        <Area selected={selectedEducations}>
          {Strings.education.list.map(
            (
              {
                title,
                date,
                institution,
                description,
                kudos,
                certification,
                production,
              },
              index
            ) => (
              <Accomplishment
                key={`edu_${index}`}
                hidden={index > 2 && Strings.education.list.length > 4}
                icon={
                  certification && (
                    <Icon href={certification}>
                      <University />
                    </Icon>
                  )
                }
              >
                <DateText>{date}</DateText>
                <Title>
                  {title}
                  <Institution> | {institution}</Institution>
                </Title>
                <Descriptions>
                  {description.map((text) => (
                    <Description>{text}</Description>
                  ))}
                </Descriptions>
                {production && (
                  <Production
                    href={production.file}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {production.title}
                  </Production>
                )}
                {kudos &&
                  kudos.map(({ name, file }, idx) => (
                    <WrapperAward key={idx} href={file}>
                      <Award />
                      <p>{name}</p>
                    </WrapperAward>
                  ))}
              </Accomplishment>
            )
          )}
        </Area>
        <Area selected={selectedCourses}>
          {Strings.certification.list
            .filter((cert) =>
              ["chartpie", "tools", "language"].includes(cert.icon)
            )
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ date, name, institute, icon, img }, index) => (
              <Accomplishment
                key={`course_${index}`}
                hidden={
                  index > 4 &&
                  Strings.certification.list.length > 4 &&
                  !allCourses
                }
                icon={
                  <Icon href={img}>
                    {icon === "tools" && <Tools />}
                    {icon === "chartpie" && <ChartPie />}
                    {icon === "language" && <Language />}
                  </Icon>
                }
              >
                <DateText>{FormatDate(date)}</DateText>
                <Title>
                  {name}
                  <Institution> | {institute}</Institution>
                </Title>
              </Accomplishment>
            ))}
          <AreaButton>
            <Button light onClick={toggleAllCourses}>
              {allCourses ? Strings.seeLess : Strings.seeMore}
            </Button>
          </AreaButton>
        </Area>
      </Content>
      <BoxShape>
        <Parallax speed={50} translateY={[-50, 50]}>
          <Triangle width="456" height="314" />
        </Parallax>
      </BoxShape>
    </Wrapper>
  )
}

export default SectionExperience
