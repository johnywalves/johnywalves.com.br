import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const RecommendedCover = styled(GatsbyImage)`
  position: absolute !important;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: opacity 0.25s;
`

export const RecommendedLink = styled(Link)`
  position: relative;
  background: var(--background-card);
  border-radius: var(--4px);

  & ${RecommendedCover} {
    opacity: 0.15;
  }

  &:hover {
    & ${RecommendedCover} {
      opacity: 0.05;
    }
  }
`

export const RecommendedContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  transition: background-color 0.5s;
  padding: var(--24px);
  z-index: 2;

  & time {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--texts);
    font-size: 0.9rem;
    margin-bottom: var(--8px);

    & span {
      font-size: 0.5rem;
      margin: 0 0.25rem;
    }
  }

  & h3 {
    color: var(--highlight);
    font-size: 1.75rem;
    margin-bottom: var(--8px);
    text-align: center;
  }

  & p {
    color: var(--texts);
    text-align: center;
    font-size: 1rem;
    max-width: 350px;
  }

  ${media.lessThan("medium")`
    h3 {
      font-size: 1.25rem;
    }
  `}
`
