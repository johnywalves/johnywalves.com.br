import styled, { css, keyframes } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ArticleCategoryNavigatiorWrapper = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: var(--8px);
    flex-wrap: wrap;
  }

  li {
    & a {
      background-color: var(--highlight);
      border-radius: 15px;

      display: block;
      padding: var(--8px) var(--16px);
      font-weight: 700;
      text-transform: uppercase;
      transition: 0.25s ease-in-out;
    }

    & a,
    & a:visited,
    & a:hover {
      color: var(--background);
    }

    & a:not(.active):hover {
      opacity: 0.5;
    }

    & a.active {
      cursor: default;
      opacity: 0.5;
      background-color: var(--shadow-colors);
    }
  }
`

export const ArticleCategoryNavigatiorTitle = styled.h2`
  color: var(--texts);
  margin: 0 0 var(--16px) 0;
  font-weight: 700;
`

export const ArticleCategoryNavigatiorCover = styled.div`
  position: relative;
  height: 450px;
  margin: 0 0 var(--16px);
  display: flex;
  align-items: center;
  justify-content: center;
`

const fadeEffect = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

const alternateDirection = css`
  animation-direction: reverse;
`

export const ArticleCategoryNavigatiorImage = styled(GatsbyImage)`
  position: absolute !important;
  transition: none;
  opacity: 0;
  animation: ${fadeEffect} 4s linear infinite;

  ${({ reverse }) => reverse && alternateDirection}
`
