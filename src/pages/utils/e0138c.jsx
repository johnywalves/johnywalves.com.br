import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import ColorsPage from "views/ColorsPage"

const title = "Exploração de Cores (#e0138c)",
  description = "Apresentação de cores #e0138c",
  thumbnail = "/figures/thumbnail_projects.jpg"

const Utils = () => {
  return (
    <Blueprint
      content
      title={title}
      description={description}
      openGraphImage={thumbnail}
    >
      <ColorsPage />
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
