import React from "react"

import ProjectPage from "components/ProjectPage"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"

const Projects = () => {
  return (
    <Blueprint content>
      <Seo title="Projetos" />
      <ProjectPage />
    </Blueprint>
  )
}

export default Projects
