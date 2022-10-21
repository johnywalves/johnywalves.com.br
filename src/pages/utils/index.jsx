import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import UtilsPage from "components/UtilsPage"

const title = "Utilidades e ferramentas",
  description =
    "Coleção de artigos para consulta, ferramentas e outras utilidades",
  thumbnail = "/figures/thumbnail_projects.jpg"

const Utils = () => {
  return (
    <Blueprint
      content
      title={title}
      description={description}
      openGraphImage={thumbnail}
    >
      <UtilsPage />
    </Blueprint>
  )
}

export default Utils

export const Head = ({ location }) => (
  <Seo
    location={location}
    title={title}
    description={description}
    image={thumbnail}
  />
)
