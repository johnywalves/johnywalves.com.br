import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/Cards/Header"
import Strings from "components/strings"
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
        <UtilsTitle>{Strings.utils.title}</UtilsTitle>
        <ImageCover image={tool.childImageSharp.gatsbyImageData} alt="" />
      </UtilsSection>

      <UtilsSection>
        <Header title={Strings.utils.titleCheatsheets} />
        <CheatsheetsList>
          {edges.map(({ node }) => (
            <RecommendedItem key={node.fields.slug} recommended={node} />
          ))}
        </CheatsheetsList>
      </UtilsSection>

      <UtilsSection light>
        <Header title={Strings.utils.titleTools} light />
        <UtilsToolList>
          <UtilsToolItem to={"/utils/e0138c"}>
            <ColorPalette /> <p>{Strings.utils.colorExplorer.title}</p>
          </UtilsToolItem>
        </UtilsToolList>
      </UtilsSection>
    </>
  )
}

export default UtilsPage
