import React from "react"

import {
  ResumeWrapper,
  ResumeSheet,
  ResumePerson,
  ResumeSection,
} from "../ResumePage/styled"

const CoverLetterPage = ({ language }) => {
  return (
    <ResumeWrapper>
      <ResumeSheet>
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

        <ResumeSection>
          <hr />
        </ResumeSection>

        <ResumeSection>
          {language.coverLetter.map((text, index) => (
            <p key={index} className="cover">
              {text}
            </p>
          ))}
        </ResumeSection>
      </ResumeSheet>
    </ResumeWrapper>
  )
}

export default CoverLetterPage
