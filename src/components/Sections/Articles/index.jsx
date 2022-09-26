import React from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { CardArticle, CardList } from "components/Cards"

import Arrow from "vectors/Arrow"
import ArrowOutline from "vectors/ArrowOutline"

import {
  SectionArticlesWrapper,
  SectionArticlesBoxShape,
  SectionArticlesBoxShapeOutline,
  SectionArticlesImageCover,
} from "./styled"

const SectionArticles = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, category: { ne: "Comic" } }
        }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
              title
              tags
              category
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    height: 256
                    width: 640
                    layout: FIXED
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            timeToRead
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <SectionArticlesWrapper>
      <CardList
        title={Strings.posts.title}
        action={Strings.posts.viewAll}
        url="/blog/"
      >
        {edges.map(({ node }) => (
          <CardArticle
            key={node.fields.slug}
            to={node.fields.slug}
            category={node.frontmatter.category}
            subtitle={node.frontmatter.date}
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            cover={
              node.frontmatter.featuredImage && (
                <SectionArticlesImageCover
                  image={
                    node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt={node.frontmatter.title}
                />
              )
            }
          />
        ))}
      </CardList>
      <SectionArticlesBoxShapeOutline>
        <Parallax translateY={[-35, 150]}>
          <ArrowOutline />
        </Parallax>
      </SectionArticlesBoxShapeOutline>
      <SectionArticlesBoxShape>
        <Parallax translateY={[-25, 50]}>
          <Arrow height="400" width="400" />
        </Parallax>
      </SectionArticlesBoxShape>
    </SectionArticlesWrapper>
  )
}

export default SectionArticles
