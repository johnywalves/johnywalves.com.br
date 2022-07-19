import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import Strings from "components/strings"
import { Article, List } from "components/Cards"

import { Wrapper } from "./styled"

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
    <Wrapper>
      <List
        title={Strings.posts.title}
        action={Strings.posts.viewAll}
        url="/blog"
      >
        {edges.map(({ node }) => (
          <Anilink
            key={node.fields.slug}
            to={node.fields.slug}
            cover
            direction="left"
            bg="var(--background)"
            duration={0.6}
          >
            {console.log(node)}
            <Article
              category={node.frontmatter.category}
              subtitle={node.frontmatter.date}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              cover={
                node.frontmatter.featuredImage && (
                  <GatsbyImage
                    alt={node.frontmatter.title}
                    image={
                      node.frontmatter.featuredImage.childImageSharp
                        .gatsbyImageData
                    }
                  />
                )
              }
            />
          </Anilink>
        ))}
      </List>
    </Wrapper>
  )
}

export default SectionArticles
