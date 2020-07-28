import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import ProjectList from "components/ProjectList"
import PostsList from "components/PostsList"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <PostsList />
    <ProjectList />
  </Layout>
)

export default Home
