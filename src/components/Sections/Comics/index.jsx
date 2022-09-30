import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { CardList } from "components/Cards"

import {
  HomeComicsWrapper,
  HomeComicsLink,
  HomeComicsHeader,
  HomeComicsImage,
} from "./styled"

const SectionComics = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, category: { eq: "Comic" } }
        }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
              title
              number
              description
              transcription
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 1200
                    layout: CONSTRAINED
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP]
                  )
                }
              }
              comicImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 750
                    layout: CONSTRAINED
                    placeholder: TRACED_SVG
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

  return (
    <HomeComicsWrapper>
      {edges.map(({ node }) => (
        <CardList
          key={node.fields.slug}
          title={Strings.comics.title}
          number={node.frontmatter.number}
          action={Strings.comics.viewAll}
          url="/comics/"
          light
        >
          <li>
            <HomeComicsLink
              fade
              to={node.fields.slug}
              duration={0.75}
              aria-label="Last Comics"
            >
              <HomeComicsHeader>
                <h3>
                  #{node.frontmatter.number.toString().padStart(3, "0")}
                  <span>●</span>
                  {node.frontmatter.title}
                </h3>
                <small>{node.frontmatter.date}</small>
              </HomeComicsHeader>
              <HomeComicsImage
                image={
                  (
                    node.frontmatter.featuredImage ||
                    node.frontmatter.comicImage
                  ).childImageSharp.gatsbyImageData
                }
                title={node.frontmatter.transcription}
                alt=""
              />
            </HomeComicsLink>
          </li>
        </CardList>
      ))}
    </HomeComicsWrapper>
  )
}

export default SectionComics
