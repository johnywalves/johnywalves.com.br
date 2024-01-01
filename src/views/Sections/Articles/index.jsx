import React from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { CardArticle, CardList } from "components/Cards"

import Arrow from "assets/vectors/Arrow"
import ArrowOutline from "assets/vectors/ArrowOutline"

import {
  SectionArticlesWrapper,
  SectionArticlesBoxShape,
  SectionArticlesBoxShapeOutline,
  SectionArticlesImageCover,
  SectionArticlesHighlightTitle,
  SectionArticlesHighlightWrapper,
  SectionArticlesHighlightLink,
  SectionArticlesHighlightContent,
  SectionArticlesHighlightCover,
  SectionArticlesHighlightShadow,
} from "./styled"

const SectionArticles = () => {
  const {
    lastestPosts: { edges: lastestEdges },
    highlightPosts: { edges: highlightEdges },
  } = useStaticQuery(graphql`
    query {
      lastestPosts: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: {
            published: { ne: false }
            highlight: { ne: true }
            category: { ne: "Comic" }
          }
        }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD MMMM YYYY")
              title
              category
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    height: 256
                    width: 512
                    layout: FIXED
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
      highlightPosts: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          frontmatter: {
            published: { ne: false }
            highlight: { eq: true }
            category: { ne: "Comic" }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD MMMM YYYY")
              title
              category
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    height: 64
                    width: 512
                    layout: FIXED
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const HighlightLine = () => {
    if (highlightEdges.length === 0) {
      return <></>
    }

    return (
      <>
        <SectionArticlesHighlightTitle>
          {Strings.posts.someHighlights}
        </SectionArticlesHighlightTitle>
        <SectionArticlesHighlightWrapper>
          {highlightEdges.map(({ node }) => (
            <SectionArticlesHighlightLink
              key={node.fields.slug}
              to={node.fields.slug}
            >
              <article>
                <SectionArticlesHighlightCover
                  image={
                    node.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt={node.frontmatter.title}
                />
                <SectionArticlesHighlightShadow />

                <SectionArticlesHighlightContent>
                  <h3>
                    <span>{node.frontmatter.category}</span>{" "}
                    {node.frontmatter.title}
                  </h3>
                  <p>{node.frontmatter.description}</p>
                </SectionArticlesHighlightContent>
              </article>
            </SectionArticlesHighlightLink>
          ))}
        </SectionArticlesHighlightWrapper>
      </>
    )
  }

  return (
    <SectionArticlesWrapper>
      <CardList
        title={Strings.posts.title}
        action={Strings.posts.viewAll}
        ExtraLine={HighlightLine}
        url="/blog/"
      >
        {lastestEdges.map(({ node }) => (
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
