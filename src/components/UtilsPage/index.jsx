import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/Cards/Header"
import RecommendedItem from "components/RecommendedItem"

import { ColorPalette } from "assets/icons"

import {
  UtilsTitle,
  ImageCover,
  UtilsSection,
  CheatsheetsList,
  UtilsToolList,
  UtilsToolItem,
} from "./styled"

const UtilsPage = () => {
  const {
    allMarkdownRemark: { edges },
    tool,
  } = useStaticQuery(graphql`
    query PostCheatsheets {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: { published: { ne: false }, cheatsheet: { eq: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              date(locale: "pt_br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              category
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    width: 450
                    height: 90
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
      tool: file(relativePath: { eq: "profile_tool.png" }) {
        childImageSharp {
          gatsbyImageData(
            height: 600
            layout: CONSTRAINED
            placeholder: TRACED_SVG
          )
        }
      }
    }
  `)

  return (
    <>
      <UtilsSection light center>
        <UtilsTitle>Utilidades & Ferramentas</UtilsTitle>
        <ImageCover image={tool.childImageSharp.gatsbyImageData} alt="" />
      </UtilsSection>

      <UtilsSection>
        <Header title="Cheatsheets" />
        <CheatsheetsList>
          {edges.map(({ node }) => (
            <RecommendedItem key={node.fields.slug} recommended={node} />
          ))}
        </CheatsheetsList>
      </UtilsSection>

      <UtilsSection light>
        <Header title="Ferramentas" light />
        <UtilsToolList>
          <UtilsToolItem to={"/utils/e0138c"}>
            <ColorPalette /> <p>Explorador das Cores</p>
          </UtilsToolItem>
        </UtilsToolList>
      </UtilsSection>
    </>
  )
}

export default UtilsPage
