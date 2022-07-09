import React from "react"

import Blueprint from "components/Blueprint"
import ProjectList from "components/ProjectList"
import SampleList from "components/SampleList"
import Seo from "components/seo"

const Projects = () => {
  return (
    <Blueprint>
      <Seo title="Projetos" />
      <ProjectList />
      <SampleList />
    </Blueprint>
  )
}

export default Projects
