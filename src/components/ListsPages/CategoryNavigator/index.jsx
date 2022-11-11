import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Strings from "components/strings"

import { Rss } from "assets/icons"

import {
  ArticleCategoryNavigatiorWrapper,
  ArticleCategoryNavigatiorTitle,
  ArticleCategoryRss,
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
      <ArticleCategoryRss
        href={Strings.posts.feed}
        target="_target"
        rel="noreferrer noopener"
      >
        <Rss /> RSS {Strings.posts.title}
      </ArticleCategoryRss>
      <ArticleCategoryNavigatiorTitle>
        {Strings.posts.categories}
      </ArticleCategoryNavigatiorTitle>
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
    </ArticleCategoryNavigatiorWrapper>
  )
}

export default ArticleCategoryNavigatior
