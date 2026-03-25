import React from "react"

import {
  PinSVG,
  ChainSVG,
  CatSVG,
  LinkedInSVG,
  PhoneSVG,
  EmailSVG,
} from "../../assets/emoji"
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

const getFirst = (text) => text.split(" ")[1]
const getLast = (text) => text.split(" ")[text.split(" ").length - 1]
const getYear = (text) => new Date(text).getFullYear()

const getDescription = (text) => {
  const withoutFirstBreak = text.split(", ").slice(1).join(", ")
  const capitulation =
    withoutFirstBreak[0].toUpperCase() + withoutFirstBreak.slice(1)
  return capitulation
}

const Person = ({ language }) => (
  <ResumePerson>
    <h1>Johny W. Alves</h1>

    <p>{language.seo.headline}</p>

    <ul>
      <li>
        <img src={PhoneSVG} alt="" width={12} height={12} />{" "}
        {language.personal.phone}
        <img src={PinSVG} alt="" width={12} height={12} />{" "}
        {language.personal.location}
      </li>
      <li>
        <img src={EmailSVG} alt="" width={12} height={12} />
        <a href="mailto:contato@johnywalves.com.br">
          contato@johnywalves.com.br
        </a>
        <img src={ChainSVG} alt="" width={12} height={12} />
        <a href="https://johnywalves.com.br">johnywalves.com.br</a>
        <img src={CatSVG} alt="" width={12} height={12} />
        <a href="https://github.com/johnywalves">github.com/johnywalves</a>
        <img src={LinkedInSVG} alt="" width={12} height={12} />
        <a href="https://linkedin.com/in/johnywalves">
          linkedin.com/in/johnywalves
        </a>
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
          <h2>{language.ui.labels.about}</h2>
          <hr />
          <p
            className="description"
            dangerouslySetInnerHTML={{
              __html: getDescription(language.seo.description),
            }}
          />
        </ResumeSection>

        <ResumeSection>
          <h2>
            {language.experience.title}{" "}
            <small>({language.ui.labels.mostRecent})</small>
          </h2>
          <hr />
          {language.experience.list
            .slice(0, 3)
            .map(({ period, role, company, location, highlights }) => (
              <ResumeSubSection key={period}>
                <ResumeSubTitle>
                  <h3>{role}</h3>
                  <h4>
                    <span>
                      <strong>{company} | </strong>
                      <em>{location}</em>
                    </span>
                    <time>{period}</time>
                  </h4>
                </ResumeSubTitle>

                <ul>
                  {highlights.map((text, index) => (
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
          {language.education.list.map(
            ({ period, degree, institution, details, thesis }) => (
              <ResumeCourse key={period}>
                <h3>
                  {degree}
                  <time>
                    {" "}
                    • {institution}
                    {", Brazil "}
                    {`(${getFirst(period)} - ${getLast(period)})`}
                  </time>{" "}
                </h3>

                {details && details.map((text) => <p>{text}</p>)}
                {thesis && <p>{thesis.title}</p>}
              </ResumeCourse>
            )
          )}
        </ResumeSection>

        <ResumeSection>
          <h2>{language.skills.title}</h2>
          <hr />
          <ul>
            {language.skills.categories.map(({ name, items }, index) => (
              <li key={index}>
                <ResumeCourse>
                  <p>
                    <span>{name}: </span>
                    {items
                      .map(({ name }) => name)
                      .slice(0, -1)
                      .join(", ")}
                    {`, ${language.ui.labels.and} `}
                    {items.map(({ name }) => name).slice(-1)}
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
                <ResumeCourse>
                  <p>
                    <span>{name}: </span> {proficiency}
                  </p>
                </ResumeCourse>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection>
          <h2>
            {language.certifications.title}{" "}
            <small>({language.ui.labels.mostRecent})</small>
          </h2>
          <hr />
          {language.certifications.list
            .splice(0, 10)
            .map(({ date, name, issuer, hours }) => (
              <ResumeCourse key={date}>
                <p>
                  <time>{getYear(date)} • </time>
                  <strong>
                    {name}
                    {hours > 0 && ` (${hours} ${language.ui.labels.hour})`}
                  </strong>{" "}
                  | {issuer}
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
