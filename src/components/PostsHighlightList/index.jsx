import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"
import Strings from "components/strings"

import { ImageHightlight } from "components/PostItem/styled"

const PostsList = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { highlight: { eq: true } } }
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
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
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
    <HomeList
      title={Strings.posts.title}
      description={Strings.posts.description}
    >
      {edges.map(({ node }, index) => (
        <Anilink
          key={index}
          to={node.fields.slug}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          <HomeCard
            title={node.frontmatter.title}
            subtitle={`${node.frontmatter.date} ● ${node.timeToRead} min de leitura`}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            cover={
              node.frontmatter.featuredImage && (
                <ImageHightlight
                  fluid={{
                    ...node.frontmatter.featuredImage.childImageSharp.fluid,
                  }}
                />
              )
            }
          />
        </Anilink>
      ))}
    </HomeList>
  )
}

export default PostsList
