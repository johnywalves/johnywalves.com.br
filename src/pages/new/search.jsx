import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import SearchPage from "components/SearchPage"

const Search = () => (
  <Blueprint content>
    <Seo title="Pesquisa" />
    <SearchPage />
  </Blueprint>
)

export default Search
