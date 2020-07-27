import React from "react"

import HomeList from "components/HomeList"
import Strings from "components/strings"

const CertList = ({ children }) => (
  <HomeList
    title={Strings.certification.title}
    description={Strings.certification.description}
  >
    {children}
  </HomeList>
)

export default CertList
