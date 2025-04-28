import styled, { css } from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const HomeComicsWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;

  ${media.lessThan("medium")`
    background-size: 50%;
  `}
`

export const HomeComicsLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeComicsHeader = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  color: var(--highlight);
  z-index: 2;

  & h3 {
    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-size: 1rem;
      margin: 0 var(--8px);
    }
  }

  & small {
    font-size: 1.5rem;
    font-weight: 600;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: flex-start;

    & h3 {
      font-size: 1.5rem;

      span {
        font-size: 0.5rem;
        margin: 0 var(--4px);
      }
    }

    & small {
      font-size: 1rem;
    }
  `}
`

export const HomeComicsContainer = styled.div`
  height: 30rem;
  overflow: hidden;
  padding: 2rem 2rem 0 2rem;

  position: relative;

  ${({ $horizontal }) =>
    $horizontal &&
    css`
      margin: 0 auto;
      width: 70%;
    `}

  &::after {
    content: "";
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      var(--background) 80%
    );

    width: 100%;
    height: 5rem;
    left: 0;
    top: 25rem;
    z-index: 5;
  }
`

export const HomeComicsImage = styled(GatsbyImage)`
  border-radius: 0.5rem;

  & img {
    outline: none;
    appearance: none;
  }

  transition: all 0.5s ease-in-out;
  box-shadow:
    0 0 8px 1px var(--shadow-colors),
    2px 2px 8px 1px var(--shadow-colors);
  z-index: 2;

  &:hover {
    box-shadow:
      0 0 16px 2px var(--shadow-colors),
      4px 4px 32px 4px var(--shadow-colors);
  }
`
