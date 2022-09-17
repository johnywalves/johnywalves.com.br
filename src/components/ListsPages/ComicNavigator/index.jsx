import React from "react"

import ProfileComics from "vectors/ProfileComics"

import {
  ArticleComicNavigatiorWrapper,
  ArticleCategoryNavigatiorCover,
} from "./styled"

const ArticleComicNavigatior = () => {
  return (
    <ArticleComicNavigatiorWrapper>
      <ArticleCategoryNavigatiorCover>
        <ProfileComics />
      </ArticleCategoryNavigatiorCover>
    </ArticleComicNavigatiorWrapper>
  )
}

export default ArticleComicNavigatior
