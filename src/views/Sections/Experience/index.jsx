import React, { useState, useMemo, useCallback, useEffect, useRef } from "react"
import { Parallax } from "react-scroll-parallax"

import Button from "components/Button"
import Strings from "components/strings"
import { Header } from "components/Cards"

import Icons, {
  Award,
  Toolbox,
  School,
  ChartPie,
  LanguageIcon,
  Code,
  CodeCurly,
  AcademicCap,
  ExpandLess,
  ExpandMore,
} from "assets/icons"
import Triangle from "assets/vectors/Triangle"

import {
  ExperienceWrapper,
  ExperienceContent,
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
  ExperienceDescription,
  Production,
  WrapperAward,
  BoxShape,
  Icon,
} from "./styled"

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

  const refExperiences = useRef()
  const refEducations = useRef()
  const refCourses = useRef()

  const [selectedExperiences, selectedEducations, selectedCourses] = useMemo(
    () => [selectedArea === 1, selectedArea === 2, selectedArea === 3],
    [selectedArea]
  )

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has("section")) {
      const section = searchParams.get("section")
      const experiencesStr = "experiences"
      const educationStr = "educations"
      const coursesStr = "courses"

      const goto = (reference) => {
        const rect = reference.current.getBoundingClientRect()
        const top = rect.top + window.scrollY - 80
        window.scroll({ top, left: 0 })
      }

      if (section.toLocaleLowerCase() === experiencesStr) {
        setSelectedArea(1)
        goto(refExperiences)
      } else if (section.toLocaleLowerCase() === educationStr) {
        setSelectedArea(2)
        goto(refEducations)
      } else if (section.toLocaleLowerCase() === coursesStr) {
        setSelectedArea(3)
        goto(refCourses)
      }
    }
  }, [])

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
    <ExperienceWrapper>
      <Header title={Strings.skills.title} light />

      <ExperienceContent>
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
            <Skills key={`skill_${index}`} selected={selectedType === index}>
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
            <CodeCurly /> {Strings.experience.title}
          </Button>
          <Button
            selected={selectedEducations}
            onClick={toggleEducations}
            light
          >
            <AcademicCap /> {Strings.education.title}
          </Button>
          <Button selected={selectedCourses} onClick={toggleCourses} light>
            <Code /> {Strings.certification.title}
          </Button>
        </Areas>

        <Area ref={refExperiences} selected={selectedExperiences}>
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
                <DateText>{date} <Institution> | {institution}</Institution></DateText>
                <Title>{title}</Title>
                <Descriptions list={1}>
                  {description.map((text, idx) => (
                    <ExperienceDescription key={idx}>
                      {`${text
                        .split("</strong>")
                        .join("")
                        .split("<strong>")
                        .join("")}${description.length - 1 !== idx ? ";" : "."
                        }`}
                    </ExperienceDescription>
                  ))}
                </Descriptions>
              </Accomplishment>
            )
          )}
          <AreaButton>
            <Button light onClick={toggleAllExperiences}>
              {allExperiences ? (
                <>
                  <ExpandLess /> {Strings.seeLess}
                </>
              ) : (
                <>
                  <ExpandMore /> {Strings.seeMore}
                </>
              )}
            </Button>
          </AreaButton>
        </Area>

        <Area ref={refEducations} selected={selectedEducations}>
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
                hidden={false}
                icon={
                  certification && (
                    <Icon href={certification}>
                      <School />
                    </Icon>
                  )
                }
              >
                <DateText>{date} <Institution> | {institution}</Institution></DateText>
                <Title>{title}</Title>
                <Descriptions>
                  {description.map((text, idx) => (
                    <ExperienceDescription key={idx}>{text}</ExperienceDescription>
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
          <span></span>
        </Area>

        <Area ref={refCourses} selected={selectedCourses}>
          {Strings.certification.list
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ date, name, institute, icon, img, time }, index) => (
              <Accomplishment
                key={`course_${index}`}
                hidden={
                  index > 4 &&
                  Strings.certification.list.length > 4 &&
                  !allCourses
                }
                icon={
                  <Icon href={img}>
                    {icon === "toolbox" && <Toolbox />}
                    {icon === "chartpie" && <ChartPie />}
                    {icon === "language" && <LanguageIcon />}
                  </Icon>
                }
              >
                <DateText>{FormatDate(date)} <Institution> | {institute}</Institution></DateText>
                <Title>{name}{time > 0 && ` (${time} ${Strings.hour})`}</Title>
              </Accomplishment>
            ))}
          <AreaButton>
            <Button light onClick={toggleAllCourses}>
              {allCourses ? (
                <>
                  <ExpandLess /> {Strings.seeLess}
                </>
              ) : (
                <>
                  <ExpandMore /> {Strings.seeMore}
                </>
              )}
            </Button>
          </AreaButton>
        </Area>
      </ExperienceContent>

      <BoxShape>
        <Parallax speed={50} translateY={[-50, 50]}>
          <Triangle width="456" height="314" />
        </Parallax>
      </BoxShape>
    </ExperienceWrapper>
  )
}

export default SectionExperience
