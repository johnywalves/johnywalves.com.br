import React from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Hit from "./Hit"
import Algolia from "./Algolia"
import { SearchWrapper, SearchPowerBy } from "./styled"

const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => {
  return (
    <SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox translations={{ placeholder: "Pesquisa..." }} />
        <Stats
          translations={{
            stats(nHits, timeSpentMs) {
              return `${nHits} resultados encontrados em ${timeSpentMs}ms`
            },
          }}
        />
        <Hits hitComponent={Hit} />
      </InstantSearch>
      <SearchPowerBy>
        <p>Powered by Algolia</p>
        <Algolia />
      </SearchPowerBy>
    </SearchWrapper>
  )
}

export default Search
