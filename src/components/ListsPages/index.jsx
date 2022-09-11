import React from "react"

import {
  ListsPagesWrapper,
  ListsPagesList,
  ListsPagesNavigator,
} from "./styled"

const ListsPages = ({ Navigator, children }) => (
  <ListsPagesWrapper navigator={!!Navigator}>
    <ListsPagesList>{children}</ListsPagesList>
    {Navigator && (
      <ListsPagesNavigator>
        <Navigator />
      </ListsPagesNavigator>
    )}
  </ListsPagesWrapper>
)

export default ListsPages
