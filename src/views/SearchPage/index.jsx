import React, { useCallback } from "react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, SearchBox, Hits, Stats } from "react-instantsearch-dom"

import Strings from "components/strings"

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
  const submitSearch = useCallback((e) => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "searchTerm",
      search_term: e.target.value,
    })
  }, [])

  return (
    <SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
        <SearchBox onSubmit={submitSearch} translations={{ placeholder: `${Strings.search}...` }} />
        <Stats
          translations={{
            stats(nHits, timeSpentMs) {
              return Strings.searchResult
                .replace("$1", nHits)
                .replace("$2", timeSpentMs)
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
