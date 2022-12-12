import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import UtilsPage from "views/UtilsPage"

const title = "Utilidades e Ferramentas",
  description =
    "Coleção de artigos para consulta, ferramentas e outras utilidades",
  thumbnail = "/figures/thumbnail_projects.jpg"

const Utils = () => {
  return (
    <ParallaxProvider>
      <Blueprint
        content
        title={title}
        description={description}
        openGraphImage={thumbnail}
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
    title={title}
    description={description}
    image={thumbnail}
  />
)
