import React from "react"

import Seo from "components/seo"
import GeneralStyles from "styles/general"
import ResumePage from "views/ResumePage"

import language from "assets/lang/en.json"

const ResumeEnglish = () => (
  <>
    <GeneralStyles />
    <ResumePage language={language} />
  </>
)

export default ResumeEnglish

export const Head = ({ location }) => (
  <Seo location={location} title="Resume - English" />
)
