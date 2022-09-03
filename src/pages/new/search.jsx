import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import SearchPage from "components/SearchPage"

const Search = () => (
  <Blueprint content>
    <SearchPage />
  </Blueprint>
)

export default Search

export const Head = ({ location }) => (
  <Seo location={location} title="Pesquisa" />
)
