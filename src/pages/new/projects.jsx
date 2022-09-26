import React from "react"

import ProjectPage from "components/ProjectPage"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"

const title = "Projetos",
  description = "Apresentação de projetos desenvolvidos ou em desenvolvimento"

const Projects = () => {
  return (
    <Blueprint content title={title} description={description}>
      <ProjectPage />
    </Blueprint>
  )
}

export default Projects

export const Head = ({ location }) => (
  <Seo location={location} title={title} description={description} />
)
