import React from "react"

import Strings from "components/strings"
import ProfileComics from "assets/vectors/ProfileComics"

import { Rss } from "assets/icons"

import {
  ArticleComicNavigatorWrapper,
  ArticleCategoryNavigatorCover,
  ArticleCategoryRss,
} from "./styled"

const ArticleComicNavigator = () => {
  return (
    <ArticleComicNavigatorWrapper>
      <ArticleCategoryNavigatorCover>
        <ProfileComics />
      </ArticleCategoryNavigatorCover>
      <ArticleCategoryRss
        href={Strings.comics.feed}
        target="_target"
        rel="noreferrer noopener"
      >
        <Rss /> RSS {Strings.comics.title}
      </ArticleCategoryRss>
    </ArticleComicNavigatorWrapper>
  )
}

export default ArticleComicNavigator
