import React from "react"

import ResumePageNavigation from "../ResumePage/navigation"
import {
  ResumeWrapper,
  ResumeContent,
  ResumeSection,
} from "../ResumePage/styled"

const CoverLetterPage = ({ language }) => {
  return (
    <ResumeWrapper>
      <ResumePageNavigation language={language} />
      <ResumeContent>
        <ResumeSection>
          {language.coverLetter.map((text, index) => <p key={index} className="cover">{text}</p>)}
        </ResumeSection>
      </ResumeContent>
    </ResumeWrapper>
  )
}

export default CoverLetterPage
