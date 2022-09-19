import React from "react"
import { Rss } from "@styled-icons/fluentui-system-filled/Rss"

import Strings from "components/strings"
import ProfileComics from "vectors/ProfileComics"

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
