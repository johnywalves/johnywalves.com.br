import React from "react"

import Seo from "components/seo"
import ResumePage from "views/ResumePage"
import GeneralStyles from "styles/general"

import language from "assets/lang/br.json"

const ResumeBrazilian = () => (
  <>
    <GeneralStyles />
    <ResumePage language={language} />
  </>
)

export default ResumeBrazilian

export const Head = ({ location }) => (
  <Seo location={location} title="Curriculum Vitae - Brazilian" />
)
