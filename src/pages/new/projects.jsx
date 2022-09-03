import React from "react"

import ProjectPage from "components/ProjectPage"
import Blueprint from "components/Blueprint"
import Seo from "components/seo"

const Projects = () => {
  return (
    <Blueprint content>
      <ProjectPage />
    </Blueprint>
  )
}

export default Projects

export const Head = ({ location }) => (
  <Seo location={location} title="Projetos" />
)
