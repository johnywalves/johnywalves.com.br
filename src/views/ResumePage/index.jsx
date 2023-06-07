import React from "react"

import {
  ResumeWrapper,
  ResumeSection,
  ResumePerson,
  ResumeCourse,
  ResumeSubSection,
  ResumeSubTitle,
  ResumeSheet,
} from "./styled"

const getLast = (text) => text.split(" ")[text.split(" ").length - 1]

const getYear = (text) => new Date(text).getFullYear()

const getCurrentYear = () => new Date().getFullYear()

const getDescription = (text) => {
  const withoutFirstBreak = text.split(", ").slice(1).join(", ")
  const capitulation = withoutFirstBreak[0].toUpperCase() + withoutFirstBreak.slice(1)
  return capitulation
}

const Person = ({ language }) => (
  <ResumePerson>
    <h1>Johny William de Oliveira Alves</h1>
    <ul>
      <li>{language.status}</li>
      <li>{language.live}</li>
      <li>
        <strong>contato</strong>@johnywalves.com.br | <strong>www</strong>.johnywalves.com.br
      </li>
      <li>
        <strong>github</strong>.com/johnywalves | <strong>linkedin</strong>.com/in/johnywalves
      </li>
    </ul>
  </ResumePerson>
)

const ResumePage = ({ language }) => {
  return (
    <ResumeWrapper>
      <ResumeSheet>
        <Person language={language} />

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
                  <h3>{institution}<time> • {date}</time></h3>
                  <h4>{title}</h4>
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
      </ResumeSheet>

      <ResumeSheet>
        <ResumeSection>
          <h2>{language.education.title}</h2>
          <hr />
          {language.education.list
            .splice(0, 4)
            .map(({ date, title, institution, production }) => (
              <ResumeCourse key={date}>
                <h3>{title}<time> • {getLast(date) >= getCurrentYear() ? language.forecastOfCompletionIn : language.finishedIn} {getLast(date)}</time> </h3>
                <p>{institution}</p>
                {production && <p>{production.title}</p>}
              </ResumeCourse>
            ))}
        </ResumeSection>

        <ResumeSection>
          <h2>{language.skills.title}</h2>
          <hr />
          <ul>
            {language.skills.list.map(({ type, list }, index) => (
              <li key={index}>
                <strong>{type}</strong>:
                {" "}
                {list.map(({ title }) => title).slice(0, -1).join(", ")}
                {` ${language.and} `}
                {list.map(({ title }) => title).slice(-1)}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.languages.title}</h2>
          <hr />
          <ul>
            {language.languages.list.map(({ name, proficiency }, index) => (
              <li key={index}>
                <strong>{name}</strong> • {proficiency}
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.certification.courses} <small>({language.mostRecent})</small></h2>
          <hr />
          {language.certification.list
            .filter(({ icon }) => ["toolbox", "chartpie"].includes(icon))
            .splice(0, 5)
            .map(({ date, name, institute, time }) => (
              <ResumeCourse key={date}>
                <p>
                  <time>{getYear(date)} • </time>
                  <strong>{name}{time > 0 && ` (${time} ${language.hour})`}</strong> | {institute}
                </p>
              </ResumeCourse>
            ))}
        </ResumeSection>
      </ResumeSheet>
    </ResumeWrapper>
  )
}

export default ResumePage
