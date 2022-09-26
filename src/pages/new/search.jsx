import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import SearchPage from "components/SearchPage"

const title = "404",
  description = "A página que você procura não existe"

const Search = () => (
  <Blueprint content title={title} description={description}>
    <SearchPage />
  </Blueprint>
)

export default Search

export const Head = ({ location }) => (
  <Seo location={location} title={title} description={description} />
)
