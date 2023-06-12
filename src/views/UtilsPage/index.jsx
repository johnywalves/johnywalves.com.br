import React, { useEffect } from "react"
import { Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import Header from "components/Cards/Header"
import Strings from "components/strings"
import RecommendedItem from "components/RecommendedItem"

import { ColorPalette, MoveUp } from "assets/icons"
import TriangleNeon from "assets/vectors/TriangleNeon"

import {
  UtilsTitle,
  ImageCover,
  UtilsSection,
  CheatsheetsList,
  UtilsToolList,
  UtilsToolItem,
  BoxTopItem,
  BoxBottomItem,
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
                    placeholder: BLURRED
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
            placeholder: BLURRED
          )
        }
      }
    }
  `)

  useEffect(() => {
    const callbackFunction = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      observer = new IntersectionObserver(callbackFunction),
      sections = document.querySelectorAll("section a")

    sections.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <UtilsSection light center>
        <UtilsTitle>{Strings.utils.title}</UtilsTitle>
        <ImageCover image={tool.childImageSharp.gatsbyImageData} alt="" />
      </UtilsSection>

      <UtilsSection>
        <BoxTopItem>
          <Parallax translateY={[-50, 0]}>
            <TriangleNeon height="400" width="400" />
          </Parallax>
          <Parallax translateY={[-220, 30]}>
            <TriangleNeon height="250" width="250" />
          </Parallax>
        </BoxTopItem>

        <Header title={Strings.utils.titleCheatsheets} />
        <CheatsheetsList>
          {edges.map(({ node }) => (
            <RecommendedItem key={node.fields.slug} recommended={node} />
          ))}
        </CheatsheetsList>
      </UtilsSection>

      <UtilsSection light>
        <BoxBottomItem>
          <Parallax translateY={[-30, 100]}>
            <TriangleNeon height="250" width="250" />
          </Parallax>
          <Parallax translateY={[-30, 30]}>
            <TriangleNeon height="400" width="400" />
          </Parallax>
        </BoxBottomItem>

        <Header title={Strings.utils.titleTools} light />
        <UtilsToolList>
          <UtilsToolItem to="/utils/e0138c">
            <ColorPalette /> <p>{Strings.utils.colorExplorer.title}</p>
          </UtilsToolItem>
          <UtilsToolItem to="https://johnywalves.github.io/cssanimatic/">
            <MoveUp /> <p>CSS Animatic</p>
          </UtilsToolItem>
        </UtilsToolList>
      </UtilsSection>
    </>
  )
}

export default UtilsPage
