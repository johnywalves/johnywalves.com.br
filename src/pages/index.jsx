import React from "react"

import Layout from "components/Layout"
import Seo from "components/seo"
import ProjectList from "components/ProjectList"
import SampleList from "components/SampleList"
import PostsHighlightList from "components/PostsHighlightList"
import ComicLast from "components/ComicLast"

const Home = () => (
  <Layout>
    <Seo title="" />
    <ComicLast />
    <PostsHighlightList />
    <ProjectList />
    <SampleList />
  </Layout>
)

export default Home
