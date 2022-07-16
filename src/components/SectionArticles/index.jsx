import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import Strings from "components/strings"
import Card from "components/Card"
import CardContainer from "components/CardContainer"

import { Wrapper } from "./styled"

const SectionArticles = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { ne: false }, category: { ne: "Comic" } } }
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
              title
              tags
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    height: 200
                    width: 640
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
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
      <h2>{Strings.posts.title}</h2>
      <CardContainer>
        {edges.map(({ node }, index) => (
          <Anilink
            key={index}
            to={node.fields.slug}
            cover
            direction="left"
            bg="var(--background)"
            duration={0.6}
          >
            <Card
              title={node.frontmatter.title}
              subtitle={`${node.frontmatter.date} ● ${node.timeToRead} min de leitura`}
              description={node.frontmatter.description}
              tags={node.frontmatter.tags}
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
      </CardContainer>
    </Wrapper>
  )
}

export default SectionArticles
