import React from "react"

import Layout from "components/Layout"
import Seo from "components/seo"
import Search from "components/Search"

const SearchPage = () => (
  <Layout>
    <Search />
  </Layout>
)

export default SearchPage

export const Head = ({ location }) => (
  <Seo location={location} title="Pesquisa" />
)
