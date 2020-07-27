import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import HomeCard from "components/HomeCard"
import HomeList from "components/HomeList"
import Strings from "components/strings"

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
    <HomeList title={Strings.posts.label} description={Strings.posts.subLabel}>
      {edges.map(({ node }, index) => (
        <Link to={node.fields.slug}>
          <HomeCard
            key={index}
            title={node.frontmatter.title}
            subtitle={`${node.frontmatter.date} ● ${node.timeToRead} min de leitura`}
            description={node.frontmatter.description}
            tags={node.frontmatter.tags}
            cover={
              node.frontmatter.featuredImage && (
                <Img
                  alt={node.frontmatter.title}
                  fluid={{
                    ...node.frontmatter.featuredImage.childImageSharp.fluid,
                    aspectRatio: 1.5,
                  }}
                />
              )
            }
          />
        </Link>
      ))}
    </HomeList>
  )
}

export default PostsList
