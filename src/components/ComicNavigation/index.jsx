import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import * as S from "./styled"

const ComicLast = ({ number }) => {
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
              number
              description
            }
          }
        }
      }
    }
  `)

  const lastNumber = edges[0].node.frontmatter.number
  const firstOne = number === 1
  const lastOne = number === lastNumber

  return (
    <S.Navigation>
      {firstOne ? (
        <p>Primeiro</p>
      ) : (
        <Anilink
          to="/comic-1"
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
        >
          Primeiro
        </Anilink>
      )}

      {firstOne ? (
        <p>Anterior</p>
      ) : (
        <Anilink
          to={`/comic-${number - 1}`}
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
        >
          Anterior
        </Anilink>
      )}

      {lastOne ? (
        <p>Próximo</p>
      ) : (
        <Anilink
          to={`/comic-${number + 1}`}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          Próximo
        </Anilink>
      )}

      {lastOne ? (
        <p>Último</p>
      ) : (
        <Anilink
          to={`/comic-${lastNumber}`}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          Último
        </Anilink>
      )}
    </S.Navigation>
  )
}

export default ComicLast
