import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import ColorsPage from "views/ColorsPage"

const titlePage = "Exploração de Cores (#e0138c)"
const descriptionPage = "Apresentação de cores #e0138c"
const thumbnailPage = "/figures/thumbnail_utils.jpg"

const Utils = () => {
  return (
    <Blueprint
      content
      title={titlePage}
      description={descriptionPage}
      openGraphImage={thumbnailPage}
    >
      <ColorsPage />
    </Blueprint>
  )
}

export default Utils

export const Head = ({ location }) => (
  <Seo
    location={location}
    title={titlePage}
    description={descriptionPage}
    image={thumbnailPage}
  />
)
