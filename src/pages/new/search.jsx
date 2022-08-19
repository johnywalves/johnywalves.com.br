import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import Search from "components/Search"

const SearchPage = () => (
  <Blueprint content>
    <Seo title="Pesquisa" />
    <Search />
  </Blueprint>
)

export default SearchPage
