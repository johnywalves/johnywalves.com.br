import React from "react"

import Seo from "components/seo"
import GeneralStyles from "styles/general"
import ResumeFullPage from "views/ResumeFullPage"

import language from "assets/lang/en.json"

const ResumeFullEnglish = () => (
  <>
    <GeneralStyles />
    <ResumeFullPage language={language} />
  </>
)

export default ResumeFullEnglish

export const Head = ({ location }) => (
  <Seo location={location} title="Full Resume - English" />
)
