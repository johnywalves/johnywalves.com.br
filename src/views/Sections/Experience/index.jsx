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
  const [allEducations, setAllEducations] = useState(false)
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

  const toggleAllEducations = useCallback(
    () => setAllEducations(!allEducations),
    [allEducations]
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
          {Strings.skills.categories.map(({ name }, index) => (
            <Type
              key={index}
              selected={selectedType === index}
              onClick={() => setSelectedType(index)}
            >
              <p>{name}</p>
            </Type>
          ))}
        </Types>

        <SkillsWrapper>
          {Strings.skills.categories.map(({ items }, index) => (
            <Skills key={`skill_${index}`} selected={selectedType === index}>
              {items.map(({ name, icon }, idx) => {
                if (icon) {
                  const IconComponent = Icons[icon]
                  return (
                    <Skill key={`${index}_${idx}`}>
                      <IconWrapper>
                        <IconComponent />
                      </IconWrapper>
                      <p>{name}</p>
                    </Skill>
                  )
                } else {
                  return (
                    <Skill key={`${index}_${idx}`}>
                      <p>{name}</p>
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
            <Code /> {Strings.certifications.title}
          </Button>
        </Areas>

        <Area ref={refExperiences} selected={selectedExperiences}>
          {Strings.experience.list.map(
            ({ role, period, company, highlights, clients }, index) => (
              <Accomplishment
                key={`exp_${index}`}
                hidden={
                  index > 2 &&
                  Strings.experience.list.length > 4 &&
                  !allExperiences
                }
              >
                <DateText>
                  {period} <Institution> | {company}</Institution>
                </DateText>
                <Title>{role}</Title>
                <Descriptions list={1}>
                  {clients?.map(({ name, highlights }) => (
                    <>
                      <h4>{name}</h4>
                      {highlights?.map((text) => (
                        <ExperienceDescription
                          key={text.toLowerCase()}
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      ))}
                    </>
                  ))}

                  {highlights?.map((text) => (
                    <ExperienceDescription
                      key={text.toLowerCase()}
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  ))}
                </Descriptions>
              </Accomplishment>
            )
          )}
          <AreaButton>
            <Button light onClick={toggleAllExperiences}>
              {allExperiences ? (
                <>
                  <ExpandLess /> {Strings.ui.labels.seeLess}
                </>
              ) : (
                <>
                  <ExpandMore /> {Strings.ui.labels.seeMore}
                </>
              )}
            </Button>
          </AreaButton>
        </Area>

        <Area ref={refEducations} selected={selectedEducations}>
          {Strings.education.list.map(
            (
              {
                degree,
                period,
                institution,
                description,
                details,
                honors,
                certificate,
                thesis,
              },
              index
            ) => (
              <Accomplishment
                key={`edu_${index}`}
                hidden={
                  index > 2 &&
                  Strings.education.list.length > 4 &&
                  !allEducations
                }
                icon={
                  certificate && (
                    <Icon href={certificate}>
                      <School />
                    </Icon>
                  )
                }
              >
                <DateText>
                  {period} <Institution> | {institution}</Institution>
                </DateText>
                <Title>{degree}</Title>
                <Descriptions>
                  {description.map((text, idx) => (
                    <ExperienceDescription key={idx}>
                      {text}
                    </ExperienceDescription>
                  ))}
                  {details?.map((text, idx) => (
                    <ExperienceDescription key={idx}>
                      {text}
                    </ExperienceDescription>
                  ))}
                </Descriptions>
                {thesis && (
                  <Production
                    href={thesis.file}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {thesis.title}
                  </Production>
                )}
                {honors?.map(({ name, file }, idx) => (
                  <WrapperAward key={idx} href={file}>
                    <Award />
                    <p>{name}</p>
                  </WrapperAward>
                ))}
              </Accomplishment>
            )
          )}
          <AreaButton>
            <Button light onClick={toggleAllEducations}>
              {allExperiences ? (
                <>
                  <ExpandLess /> {Strings.ui.labels.seeLess}
                </>
              ) : (
                <>
                  <ExpandMore /> {Strings.ui.labels.seeMore}
                </>
              )}
            </Button>
          </AreaButton>
        </Area>

        <Area ref={refCourses} selected={selectedCourses}>
          {Strings.certifications.list
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map(({ date, name, issuer, type, file, hours }, index) => (
              <Accomplishment
                key={`course_${index}`}
                hidden={
                  index > 4 &&
                  Strings.certifications.list.length > 4 &&
                  !allCourses
                }
                icon={
                  <Icon href={file}>
                    {type === "certification" && <Toolbox />}
                    {type === "course" && <ChartPie />}
                    {type === "language" && <LanguageIcon />}
                  </Icon>
                }
              >
                <DateText>
                  {FormatDate(date)} <Institution> | {issuer}</Institution>
                </DateText>
                <Title>
                  {name}
                  {hours > 0 && ` (${hours} ${Strings.ui.labels.hour})`}
                </Title>
              </Accomplishment>
            ))}
          <AreaButton>
            <Button light onClick={toggleAllCourses}>
              {allCourses ? (
                <>
                  <ExpandLess /> {Strings.ui.labels.seeLess}
                </>
              ) : (
                <>
                  <ExpandMore /> {Strings.ui.labels.seeMore}
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
