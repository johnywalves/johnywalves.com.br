import React from "react"

import Layout from "components/Layout"
import ProjectList from "components/ProjectList"
import SampleList from "components/SampleList"
import Seo from "components/seo"

const Projects = () => {
  return (
    <Layout>
      <ProjectList />
      <SampleList />
    </Layout>
  )
}

export default Projects

export const Head = ({ location }) => (
  <Seo location={location} title="Pesquisa" />
)
