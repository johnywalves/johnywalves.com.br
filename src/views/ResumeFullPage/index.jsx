import React from "react"
import { createGlobalStyle } from "styled-components"
import {
  ResumeWrapper,
  ResumeSection,
  ResumePerson,
  ResumeCourse,
  ResumeSubSection,
  ResumeSubTitle,
  ResumeFullContent,
} from "../ResumePage/styled"
import {
  PinSVG,
  ChainSVG,
  CatSVG,
  LinkedInSVG,
  PhoneSVG,
  EmailSVG,
} from "../../assets/emoji"
import { languagePropType } from "assets/lang/propTypes"

const PrintStyles = createGlobalStyle`
  @page {
    margin-top: 1cm;
    margin-bottom: 60px;
  }
  @page :first {
    margin-top: 0cm;
  }
`

const getFirst = (text) => text.split(" ")[1]
const getLast = (text) => text.split(" ")[text.split(" ").length - 1]
const getYear = (text) => new Date(text).getFullYear()

const getDescription = (text) => {
  const parts = text.split(", ").slice(1).join(", ")
  return parts.charAt(0).toUpperCase() + parts.slice(1)
}

const ResumeFullPage = ({ language }) => (
  <>
    <PrintStyles />
    <ResumeWrapper>
      <ResumeFullContent>
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
              <a href="mailto:johnywalves@gmail.com">johnywalves@gmail.com</a>
              <img src={ChainSVG} alt="" width={12} height={12} />
              <a href="https://johnywalves.com.br">johnywalves.com.br</a>
              <img src={CatSVG} alt="" width={12} height={12} />
              <a href="https://github.com/johnywalves">
                github.com/johnywalves
              </a>
              <img src={LinkedInSVG} alt="" width={12} height={12} />
              <a href="https://linkedin.com/in/johnywalves">
                linkedin.com/in/johnywalves
              </a>
            </li>
          </ul>
        </ResumePerson>

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
          <h2>{language.experience.title}</h2>
          <hr />
          {language.experience.list.map(
            ({ period, role, company, location, highlights, clients }) => (
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

                {highlights && (
                  <ul>
                    {highlights.map((text, index) => (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    ))}
                  </ul>
                )}
                {clients &&
                  clients.map(({ name, highlights: clientHighlights }, ci) => (
                    <div key={ci}>
                      <p>
                        <strong>{name}</strong>
                      </p>
                      <ul>
                        {clientHighlights.map((text, index) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: text }}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}
              </ResumeSubSection>
            )
          )}
        </ResumeSection>

        <ResumeSection className="keep-together">
          <h2>{language.education.title}</h2>
          <hr />
          {language.education.list.map(
            ({ period, degree, institution, details, thesis }) => (
              <ResumeCourse key={period}>
                <h3>
                  {degree}
                  <time>
                    {" "}
                    &bull; {institution}
                    {", Brazil "}
                    {`(${getFirst(period)} - ${getLast(period)})`}
                  </time>
                </h3>

                {details &&
                  details.map((text, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: text }} />
                  ))}
                {thesis && <p>{thesis.title}</p>}
              </ResumeCourse>
            )
          )}
        </ResumeSection>

        <ResumeSection className="keep-together">
          <h2>{language.skills.title}</h2>
          <hr />
          <ul>
            {language.skills.categories.map(({ name, items }, index) => (
              <li key={index}>
                <ResumeCourse>
                  <p>
                    <span>{name}: </span>
                    {items.map(({ name }) => name).join(", ")}
                  </p>
                </ResumeCourse>
              </li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection className="keep-together">
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

        <ResumeSection className="keep-together">
          <h2>{language.projects.title}</h2>
          <hr />
          {language.projects.list
            .slice(0, 5)
            .map(({ name, description, url, stack }, index) => (
              <ResumeSubSection key={index}>
                <ResumeSubTitle>
                  <h3>
                    {name}
                    {url && (
                      <time>
                        {" "}
                        &bull;{" "}
                        <a href={url} target="_blank" rel="noreferrer">
                          {url.replace(/(^\w+:|^)\/\//, "").replace(/\/$/, "")}
                        </a>
                      </time>
                    )}
                  </h3>
                </ResumeSubTitle>
                <p>{description}</p>
                {stack && (
                  <p>
                    <strong>Stack:</strong> {stack.join(", ")}
                  </p>
                )}
              </ResumeSubSection>
            ))}
        </ResumeSection>

        <ResumeSection className="keep-together">
          <h2>{language.certifications.title}</h2>
          <hr />
          {language.certifications.list.map(({ date, name, issuer, hours }) => (
            <ResumeCourse key={date}>
              <p>
                <time>{getYear(date)} &bull; </time>
                <strong>
                  {name}
                  {hours > 0 && ` (${hours} ${language.ui.labels.hour})`}
                </strong>{" "}
                | {issuer}
              </p>
            </ResumeCourse>
          ))}
        </ResumeSection>
      </ResumeFullContent>
    </ResumeWrapper>
  </>
)

ResumeFullPage.propTypes = {
  language: languagePropType.isRequired,
}

export default ResumeFullPage
