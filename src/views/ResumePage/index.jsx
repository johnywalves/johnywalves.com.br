import React from "react"

import {
  ResumeWrapper,
  ResumeNavigation,
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
      <ResumeNavigation>
        <ResumeSection>
          <img src="/figures/johnywalves.png" alt="" />
          <h1>Johny W. Alves</h1>
          <label>{language.position}</label>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.languages.title}</h2>
          <hr />
          <ul>
            {language.languages.list.map(({ name, proficiency }) => (
              <li>
                <strong>{name}</strong> ({proficiency})
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.skills.title}</h2>
          <hr />
          <ul>
            {language.skills.list.map(({ type, list }) => (
              <li>
                <h3>{type}</h3>
                <ul>
                  {list.map(({ title }) => (
                    <li>{title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection>
          <h2>{language.contact.title}</h2>
          <hr />
          <ul>
            <li>
              <strong>contato</strong>@johnywalves.com.br
            </li>
            <li>
              <strong>www</strong>.johnywalves.com.br
            </li>
            <li>
              <strong>github</strong>.com/johnywalves
            </li>
            <li>
              <strong>linkedin</strong>.com/in/johnywalves
            </li>
          </ul>
        </ResumeSection>
      </ResumeNavigation>
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
              <ResumeSubSection>
                <ResumeSubTitle>
                  <time>{date}.</time><h3>{title}</h3>
                  <p>|</p>
                  <p>{institution}</p>
                </ResumeSubTitle>

                <ul>
                  {description.map((descript) => (
                    <li
                      dangerouslySetInnerHTML={{
                        __html: descript,
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
          {language.education.list.map(({ date, title, institution, production }) => (
            <ResumeCourse>
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
              <ResumeCourse>
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
