import React from "react"

import {
  ListsPagesWrapper,
  ListsPagesList,
  ListsPagesNavigatorWrapper,
} from "./styled"

const ListsPages = ({ Navigator, children }) => (
  <ListsPagesWrapper navigator={!!Navigator}>
    <ListsPagesList>{children}</ListsPagesList>
    {Navigator && (
      <ListsPagesNavigatorWrapper>
        <Navigator />
      </ListsPagesNavigatorWrapper>
    )}
  </ListsPagesWrapper>
)

export { default as ArticleCategoryNavigator } from "./CategoryNavigator"
export { default as ArticleComicNavigator } from "./ComicNavigator"
export { default as SeparatorList } from "./SeparatorList"

export default ListsPages
