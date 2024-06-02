import React from "react"

import {
  ResumeWrapper,
  ResumeSection,
  ResumePerson,
  ResumeCourse,
  ResumeSubSection,
  ResumeSubTitle,
  ResumeSheet,
  ResumeFooter,
} from "./styled"

const getLast = (text) => text.split(" ")[text.split(" ").length - 1]

const getYear = (text) => new Date(text).getFullYear()

const getCurrentYear = () => new Date().getFullYear()

const getDescription = (text) => {
  const withoutFirstBreak = text.split(", ").slice(1).join(", ")
  const capitulation =
    withoutFirstBreak[0].toUpperCase() + withoutFirstBreak.slice(1)
  return capitulation
}

const Person = ({ language }) => (
  <ResumePerson>
    <h1>Johny William de Oliveira Alves</h1>
    <ul>
      <li>{language.status}</li>
      <li>{language.live}</li>
      <li>
        <strong>E-mail:</strong> contato@johnywalves.com.br |{" "}
        <strong>Web:</strong> www.johnywalves.com.br
      </li>
      <li>
        <strong>GitHub:</strong> www.github.com/johnywalves |{" "}
        <strong>LinkedIn:</strong> www.linkedin.com/in/johnywalves
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
          <h2>
            {language.experience.title} <small>({language.mostRecent})</small>
          </h2>
          <hr />
          {language.experience.list
            .slice(0, 4)
            .map(({ date, title, institution, description }) => (
              <ResumeSubSection key={date}>
                <ResumeSubTitle>
                  <h3>
                    {institution}
                    <time>• {date}</time>
                  </h3>
                  <h4>{title}</h4>
                </ResumeSubTitle>

                <ul>
                  {description.map((text, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: text,
                      }}
                    />
                  ))}
                </ul>
              </ResumeSubSection>
            ))}
        </ResumeSection>

        <ResumeFooter>
          <p>johnywalves.com.br</p>
          <p>1/2</p>
        </ResumeFooter>
      </ResumeSheet>

      <ResumeSheet>
        <ResumeSection>
          <h2>{language.education.title}</h2>
          <hr />
          {language.education.list
            .splice(0, 4)
            .map(({ date, title, institution, details, production }) => (
              <ResumeCourse key={date}>
                <h3>
                  {title}
                  <time>
                    {" "}
                    •{" "}
                    {getLast(date) >= getCurrentYear()
                      ? language.forecastOfCompletionIn
                      : language.finishedIn}{" "}
                    {getLast(date)}
                  </time>{" "}
                </h3>
                <p>{institution}</p>
                {details && details.map((text) => <p>{text}</p>)}
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
                <ResumeCourse>
                  <h3>{type}</h3>
                  <p>
                    {list
                      .map(({ title }) => title)
                      .slice(0, -1)
                      .join(", ")}
                    {`, ${language.and} `}
                    {list.map(({ title }) => title).slice(-1)}
                  </p>
                </ResumeCourse>
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
          <h2>
            {language.certification.title}{" "}
            <small>({language.mostRecent})</small>
          </h2>
          <hr />
          {language.certification.list
            .splice(0, 5)
            .map(({ date, name, institute, time }) => (
              <ResumeCourse key={date}>
                <p>
                  <time>{getYear(date)} • </time>
                  <strong>
                    {name}
                    {time > 0 && ` (${time} ${language.hour})`}
                  </strong>{" "}
                  | {institute}
                </p>
              </ResumeCourse>
            ))}
        </ResumeSection>

        <ResumeFooter>
          <p>johnywalves.com.br</p>
          <p>2/2</p>
        </ResumeFooter>
      </ResumeSheet>
    </ResumeWrapper>
  )
}

export default ResumePage
