import React from "react"

import Seo from "components/seo"
import GeneralStyles from "styles/general"
import ResumeFullPage from "views/ResumeFullPage"

import language from "assets/lang/br.json"

const ResumeFullBrazilian = () => (
  <>
    <GeneralStyles />
    <ResumeFullPage language={language} />
  </>
)

export default ResumeFullBrazilian

export const Head = ({ location }) => (
  <Seo location={location} title="Currículo Completo - Português" />
)
