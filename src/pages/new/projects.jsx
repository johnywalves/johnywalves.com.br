import React from "react"

import ProjectPage from "components/ProjectPage"
import Blueprint, { Container } from "components/Blueprint"
import Seo from "components/seo"

const Projects = () => {
  return (
    <Blueprint content>
      <Seo title="Projetos" />
      <Container>
        <ProjectPage />
      </Container>
    </Blueprint>
  )
}

export default Projects
