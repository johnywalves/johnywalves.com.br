import React from "react"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import Strings from "components/strings"

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

export const ArticleCategoryNavigatior = ({ categories }) => (
  <>
    <h2>{Strings.posts.categories}</h2>
    <ul>
      {categories.map((category) => (
        <li>
          <Anilink
            fade
            to={`/new/category/${category.toLowerCase()}/`}
            duration={0.75}
          >
            <p>{category}</p>
          </Anilink>
        </li>
      ))}
    </ul>
  </>
)

export default ListsPages
