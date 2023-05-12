import React from "react"

import ResumePageNavigation from "./navigation"
import {
  ResumeWrapper,
  ResumeContent,
  ResumeSection,
  ResumePerson,
  ResumeCourse,
  ResumeSubSection,
  ResumeSubTitle,
} from "./styled"

const getLast = (text) => text.split(" ")[text.split(" ").length - 1]

const getYear = (text) => new Date(text).getFullYear()

const getDescription = (text) => {
  const withoutFirstBreak = text.split(", ").slice(1).join(", ")
  const capitulation = withoutFirstBreak[0].toUpperCase() + withoutFirstBreak.slice(1)
  return capitulation
}

const ResumePage = ({ language }) => {
  return (
    <ResumeWrapper>
      <ResumePageNavigation language={language} />
      <ResumeContent>
        <ResumePerson>
          <p>{language.status}</p>
          <p>{language.live}</p>
        </ResumePerson>

        <ResumeSection>
          <h2>{language.aboutMe}</h2>
          <hr />
          <p className="description">{getDescription(language.description)}</p>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.experience.title} <small>({language.mostRecent})</small></h2>
          <hr />
          {language.experience.list
            .slice(0, 3)
            .map(({ date, title, institution, description }) => (
              <ResumeSubSection key={date}>
                <ResumeSubTitle>
                  <time>{date}.</time><h3>{title}</h3>
                  <p>|</p>
                  <p>{institution}</p>
                </ResumeSubTitle>

                <ul>
                  {description.map((text, index) => (
                    <li key={index}
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}
                    />
                  ))}
                </ul>
              </ResumeSubSection>
            ))}
        </ResumeSection>

        <ResumeSection>
          <h2>{language.education.title}</h2>
          <hr />
          {language.education.list
            .splice(0, 4)
            .map(({ date, title, institution, production }) => (
              <ResumeCourse key={date}>
                <p>
                  <time>{getLast(date)}</time>. <strong>{title}</strong> |{" "}
                  {institution}
                </p>
                {production && <p>{production.title}</p>}
              </ResumeCourse>
            ))}
        </ResumeSection>

        <ResumeSection>
          <h2>{language.certification.courses} <small>({language.mostRecent})</small></h2>
          <hr />
          {language.certification.list
            .filter(({ icon }) => ["toolbox", "chartpie"].includes(icon))
            .splice(0, 3)
            .map(({ date, name, institute }) => (
              <ResumeCourse key={date}>
                <p>
                  <time>{getYear(date)}</time>. <strong>{name}</strong> |{" "}
                  {institute}
                </p>
              </ResumeCourse>
            ))}
        </ResumeSection>
      </ResumeContent>
    </ResumeWrapper>
  )
}

export default ResumePage
