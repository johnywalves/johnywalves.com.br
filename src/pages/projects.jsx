import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"

import ProjectPage from "views/ProjectPage"

const titlePage = "Projetos e Desenvolvimento"
const descriptionPage = "Portfólio de projetos desenvolvidos ou em desenvolvimento"
const thumbnailPage = "/figures/thumbnail_projects.jpg"

const Projects = () => {
  return (
    <ParallaxProvider>
      <Blueprint
        content
        title={titlePage}
        description={descriptionPage}
        openGraphImage={thumbnailPage}
      >
        <ProjectPage />
      </Blueprint>
    </ParallaxProvider>
  )
}

export default Projects

export const Head = ({ location }) => (
  <Seo
    location={location}
    title={titlePage}
    description={descriptionPage}
    image={thumbnailPage}
  />
)
