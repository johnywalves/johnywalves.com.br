import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import UtilsPage from "views/UtilsPage"

const titlePage = "Utilidades e Ferramentas"
const descriptionPage = "Coleção de artigos para consulta, ferramentas e outras utilidades"
const thumbnailPage = "/figures/thumbnail_utils.jpg"

const Utils = () => {
  return (
    <ParallaxProvider>
      <Blueprint
        content
        title={titlePage}
        description={descriptionPage}
        openGraphImage={thumbnailPage}
      >
        <UtilsPage />
      </Blueprint>
    </ParallaxProvider>
  )
}

export default Utils

export const Head = ({ location }) => (
  <Seo
    location={location}
    title={titlePage}
    imagenWidth={1200}
    imageHeight={628}
    description={descriptionPage}
    image={thumbnailPage}
  />
)
