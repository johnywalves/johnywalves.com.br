import React from "react"

import Layout from "components/Layout"
import Seo from "components/seo"
import Search from "components/Search"

const SearchPage = () => (
  <Layout>
    <Seo title="Pesquisa" />
    <Search />
  </Layout>
)

export default SearchPage
