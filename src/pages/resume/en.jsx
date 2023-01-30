import React from "react"

import Seo from "components/seo"
import ResumePage from "views/ResumePage"
import GeneralStyles from "styles/general"

import language from "assets/lang/en.json"

const ResumeEnglish = () => (
  <>
    <GeneralStyles />
    <ResumePage language={language} />
  </>
)

export default ResumeEnglish

export const Head = ({ location }) => (
  <Seo location={location} title="Curriculum Vitae - English" />
)
