import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  ArticleComicNavigatiorWrapper,
  ArticleCategoryNavigatiorCover,
  ArticleCategoryNavigatiorImage,
} from "./styled"

const ArticleComicNavigatior = () => {
  const { comic } = useStaticQuery(graphql`
    query {
      comic: file(relativePath: { eq: "profile_comic.png" }) {
        ...extractFieldsComic
      }
    }

    fragment extractFieldsComic on File {
      childImageSharp {
        gatsbyImageData(
          width: 300
          height: 350
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
    }
  `)

  return (
    <ArticleComicNavigatiorWrapper>
      <ArticleCategoryNavigatiorCover>
        <ArticleCategoryNavigatiorImage
          image={comic.childImageSharp.gatsbyImageData}
          alt=""
        />
      </ArticleCategoryNavigatiorCover>
    </ArticleComicNavigatiorWrapper>
  )
}

export default ArticleComicNavigatior
