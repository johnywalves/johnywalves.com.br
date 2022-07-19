import React from "react"

import Layout from "components/Layout"
import Seo from "components/seo"
import ProjectList from "components/ProjectList"
import PostsHighlightList from "components/PostsHighlightList"
import ComicLast from "components/ComicLast"

const Home = () => {
  return (
    <Layout>
      <Seo title="" />
      <PostsHighlightList />
      <ProjectList simple />
      <ComicLast />
    </Layout>
  )
}

export default Home
