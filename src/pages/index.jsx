import React from "react"

import Layout from "components/Layout"
import SEO from "components/seo"
import ProjectList from "components/ProjectList"
import PostsHighlightList from "components/PostsHighlightList"
import ComicLast from "components/ComicLast"

const Home = () => (
  <Layout>
    <SEO />
    <ComicLast />
    <PostsHighlightList />
    <ProjectList />
  </Layout>
)

export default Home
