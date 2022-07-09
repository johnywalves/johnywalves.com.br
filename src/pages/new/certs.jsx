import React from "react"

import CertCard from "components/CertCard"
import CertList from "components/CertList"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import Strings from "components/strings"

const Certs = () => (
  <Blueprint>
    <Seo title={Strings.certification.title} />
    <CertList>
      {Strings.certification.list
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((cert, index) => (
          <CertCard key={index} index={index} {...cert} />
        ))}
    </CertList>
  </Blueprint>
)

export default Certs
