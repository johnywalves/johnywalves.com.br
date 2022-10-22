import React from "react"

import Strings from "components/strings"
import ProfileComics from "assets/vectors/ProfileComics"

import { Rss } from "assets/icons"

import {
  ArticleComicNavigatiorWrapper,
  ArticleCategoryNavigatiorCover,
  ArticleCategoryRss,
} from "./styled"

const ArticleComicNavigatior = () => {
  return (
    <ArticleComicNavigatiorWrapper>
      <ArticleCategoryNavigatiorCover>
        <ProfileComics />
      </ArticleCategoryNavigatiorCover>
      <ArticleCategoryRss
        href={Strings.comics.feed}
        target="_target"
        rel="noreferrer noopener"
      >
        <Rss /> RSS {Strings.comics.title}
      </ArticleCategoryRss>
    </ArticleComicNavigatiorWrapper>
  )
}

export default ArticleComicNavigatior
