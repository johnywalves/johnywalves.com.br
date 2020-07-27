import React from "react"

import HomeList from "components/HomeList"

const CertList = ({ children }) => (
  <HomeList title="Certificados" description="Lista de certificados">
    {children}
  </HomeList>
)

export default CertList
