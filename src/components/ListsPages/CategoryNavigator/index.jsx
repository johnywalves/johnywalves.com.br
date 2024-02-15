import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Strings from "components/strings"

import { Rss } from "assets/icons"

import {
  ArticleCategoryNavigatorWrapper,
  ArticleCategoryNavigatorTitle,
  ArticleCategoryRss,
  ArticleCategoryNavigatorCover,
  ArticleCategoryNavigatorImage,
} from "./styled"

const ArticleCategoryNavigator = ({ categories }) => {
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
        gatsbyImageData(height: 400, layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  `)

  return (
    <ArticleCategoryNavigatorWrapper>
      <ArticleCategoryNavigatorCover>
        <ArticleCategoryNavigatorImage
          image={serious.childImageSharp.gatsbyImageData}
          alt=""
        />
        <ArticleCategoryNavigatorImage
          image={laugh.childImageSharp.gatsbyImageData}
          reverse={1}
          alt=""
        />
      </ArticleCategoryNavigatorCover>
      <ArticleCategoryRss
        href={Strings.posts.feed}
        target="_target"
        rel="noreferrer noopener"
      >
        <Rss /> RSS {Strings.posts.title}
      </ArticleCategoryRss>
      <ArticleCategoryNavigatorTitle>
        {Strings.posts.categories}
      </ArticleCategoryNavigatorTitle>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/category/${category.toLowerCase()}/`}
              activeClassName="active"
            >
              <p>{category}</p>
            </Link>
          </li>
        ))}
      </ul>
    </ArticleCategoryNavigatorWrapper>
  )
}

export default ArticleCategoryNavigator
