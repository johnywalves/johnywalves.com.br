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
  const { show, react } = useStaticQuery(graphql`
    query {
      show: file(relativePath: { eq: "profile_show.png" }) {
        ...extractFieldsCategory
      }
      react: file(relativePath: { eq: "profile_react.png" }) {
        ...extractFieldsCategory
      }
    }

    fragment extractFieldsCategory on File {
      childImageSharp {
        gatsbyImageData(
          width: 400
          height: 300
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
          image={show.childImageSharp.gatsbyImageData}
          delay={0.5}
          alt=""
        />
        <ArticleCategoryNavigatiorImage
          image={react.childImageSharp.gatsbyImageData}
          delay={4.5}
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
