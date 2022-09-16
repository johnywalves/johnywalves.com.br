import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import Strings from "components/strings"

import {
  ArticleCategoryNavigatiorWrapper,
  ArticleCategoryNavigatiorTitle,
  ArticleCategoryNavigatiorCover,
  ArticleCategoryNavigatiorImage,
} from "./styled"

const ArticleCategoryNavigatior = ({ categories }) => {
  const { serious, laugh } = useStaticQuery(graphql`
    query {
      serious: file(relativePath: { eq: "profile_serious.png" }) {
        ...extractFieldsCategory
      }
      laugh: file(relativePath: { eq: "profile_laugh.png" }) {
        ...extractFieldsCategory
      }
    }

    fragment extractFieldsCategory on File {
      childImageSharp {
        gatsbyImageData(
          height: 400
          layout: CONSTRAINED
          placeholder: TRACED_SVG
        )
      }
    }
  `)

  return (
    <ArticleCategoryNavigatiorWrapper>
      <ArticleCategoryNavigatiorCover>
        <ArticleCategoryNavigatiorImage
          image={serious.childImageSharp.gatsbyImageData}
          alt=""
        />
        <ArticleCategoryNavigatiorImage
          image={laugh.childImageSharp.gatsbyImageData}
          reverse={1}
          alt=""
        />
      </ArticleCategoryNavigatiorCover>
      <ArticleCategoryNavigatiorTitle>
        {Strings.posts.categories}
      </ArticleCategoryNavigatiorTitle>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Anilink
              fade
              to={`/new/category/${category.toLowerCase()}/`}
              duration={0.75}
              activeClassName="active"
            >
              <p>{category}</p>
            </Anilink>
          </li>
        ))}
      </ul>
    </ArticleCategoryNavigatiorWrapper>
  )
}

export default ArticleCategoryNavigatior
