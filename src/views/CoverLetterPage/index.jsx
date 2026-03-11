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
  ResumeSheet,
  ResumePerson,
  ResumeSection,
} from "../ResumePage/styled"

const CoverLetterPage = ({ language }) => {
  return (
    <ResumeWrapper>
      <ResumeSheet>
        <ResumePerson>
          <h1>Johny W. Alves</h1>
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
