import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Anilink from "gatsby-plugin-transition-link/AniLink"

import Strings from "components/strings"

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
        <p>{Strings.comics.first}</p>
      ) : (
        <Anilink
          to="/comic-1"
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
        >
          {Strings.comics.first}
        </Anilink>
      )}

      {firstOne ? (
        <p>{Strings.comics.prev}</p>
      ) : (
        <Anilink
          to={`/comic-${number - 1}`}
          cover
          direction="right"
          bg="var(--background)"
          duration={0.6}
        >
          {Strings.comics.prev}
        </Anilink>
      )}

      {lastOne ? (
        <p>{Strings.comics.next}</p>
      ) : (
        <Anilink
          to={`/comic-${number + 1}`}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          {Strings.comics.next}
        </Anilink>
      )}

      {lastOne ? (
        <p>{Strings.comics.last}</p>
      ) : (
        <Anilink
          to={`/comic-${lastNumber}`}
          cover
          direction="left"
          bg="var(--background)"
          duration={0.6}
        >
          {Strings.comics.last}
        </Anilink>
      )}
    </S.Navigation>
  )
}

export default ComicLast
