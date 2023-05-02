import React from "react"

import Seo from "components/seo"
import CoverLetterPage from "views/CoverLetterPage"
import GeneralStyles from "styles/general"

import language from "assets/lang/br.json"

const CoverLetterBrazilian = () => (
  <>
    <GeneralStyles />
    <CoverLetterPage language={language} />
  </>
)

export default CoverLetterBrazilian

export const Head = ({ location }) => (
  <Seo location={location} title="Carta de Apresentação - Brazilian" />
)
