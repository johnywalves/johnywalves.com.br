import React from "react"

import {
  ListsPagesWrapper,
  ListsPagesList,
  ListsPagesNavigatorWrapper,
  ListsPagesNavigator,
} from "./styled"

const ListsPages = ({ Navigator, children }) => (
  <ListsPagesWrapper navigator={!!Navigator}>
    <ListsPagesList>{children}</ListsPagesList>
    {Navigator && (
      <ListsPagesNavigatorWrapper>
        <ListsPagesNavigator>
          <Navigator />
        </ListsPagesNavigator>
      </ListsPagesNavigatorWrapper>
    )}
  </ListsPagesWrapper>
)

export default ListsPages
