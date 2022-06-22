import React from "react"

import Layout from "components/Layout"
import ProjectList from "components/ProjectList"
import SampleList from "components/SampleList"
import Seo from "components/seo"

const Projects = () => {
  return (
    <Layout>
      <Seo title="Projetos" />
      <ProjectList />
      <SampleList />
    </Layout>
  )
}

export default Projects
