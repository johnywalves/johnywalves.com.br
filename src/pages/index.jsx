import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import ProjectList from "components/ProjectList"
import PostsHighlightList from "components/PostsHighlightList"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <PostsHighlightList />
    <ProjectList />
  </Layout>
)

export default Home
