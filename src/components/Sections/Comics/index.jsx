import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Strings from "components/strings"
import { List } from "components/Cards"

import { Wrapper, Link, Header, Image } from "./styled"

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
              date(locale: "pt_br", formatString: "DD [de] MMMM YYYY")
              title
              number
              description
              transcription
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 800
                    layout: CONSTRAINED
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP]
                  )
                }
              }
              comicImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 600
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
    <Wrapper>
      {edges.map(({ node }) => (
        <List
          key={node.fields.slug}
          title={Strings.comics.title}
          number={node.frontmatter.number}
          action={Strings.comics.viewAll}
          url="/comics"
          light
        >
          <li>
            <Link
              to={node.fields.slug}
              cover
              direction="left"
              bg="var(--background)"
              duration={0.6}
              aria-label="Last Comics"
            >
              <Header>
                <h3>{node.frontmatter.title}</h3>
                <small>{node.frontmatter.date}</small>
              </Header>
              <Image
                image={
                  (
                    node.frontmatter.featuredImage ||
                    node.frontmatter.comicImage
                  ).childImageSharp.gatsbyImageData
                }
                title={node.frontmatter.transcription}
                alt=""
              />
            </Link>
          </li>
        </List>
      ))}
    </Wrapper>
  )
}

export default SectionComics
