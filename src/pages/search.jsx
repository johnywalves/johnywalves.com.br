import React from "react"

import Blueprint from "components/Blueprint"
import Seo from "components/seo"
import SearchPage from "components/SearchPage"

const title = "Pesquisa",
  description = "Busca por texto de conteúdos"

const Search = () => (
  <Blueprint content title={title} description={description}>
    <SearchPage />
  </Blueprint>
)

export default Search

export const Head = ({ location }) => (
  <Seo location={location} title={title} description={description} />
)
