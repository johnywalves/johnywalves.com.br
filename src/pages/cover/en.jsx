import React from "react"

import Seo from "components/seo"
import CoverLetterPage from "views/CoverLetterPage"
import GeneralStyles from "styles/general"

import language from "assets/lang/en.json"

const CoverLetterEnglish = () => (
  <>
    <GeneralStyles />
    <CoverLetterPage language={language} />
  </>
)

export default CoverLetterEnglish

export const Head = ({ location }) => (
  <Seo location={location} title="Cover Letter - English" />
)
