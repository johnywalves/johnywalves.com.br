import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"
import { GatsbyImage } from "gatsby-plugin-image"

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
        filter: { frontmatter: { published: { ne: false }, highlight: { eq: true } } }
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
                    height: 250
                    width: 500
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
    </HomeList>
  )
}

export default PostsList
