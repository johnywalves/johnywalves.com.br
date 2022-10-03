import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"

import ProjectPage from "components/ProjectPage"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"

const title = "Projetos e Desenvolvimento",
  description = "Apresentação de projetos desenvolvidos ou em desenvolvimento"

const Projects = () => {
  return (
    <ParallaxProvider>
      <Blueprint
        content
        openGraphImage="/figures/thumbnail_project.png"
        title={title}
        description={description}
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
    title={title}
    description={description}
    image="/figures/thumbnail_projects.jpg"
  />
)
