import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

import Anilink from "gatsby-plugin-transition-link/AniLink"

export const HomeComicsWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;

  ${media.lessThan("medium")`
    background-size: 50%;
  `}
`

export const HomeComicsLink = styled(Anilink)`
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
  margin-bottom: var(--16px);
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

export const HomeComicsImage = styled(GatsbyImage)`
  border: 15px solid var(--white);
  border-radius: 15px;
  transition: 0.5s ease-in-out;
  transform: scale(0.9);
  background-color: var(--white);
  box-shadow: 0 0 8px 1px var(--shadow-colors),
    4px 4px 8px 1px var(--shadow-colors);
  z-index: 2;

  &:hover {
    transform: scale(1);
    box-shadow: 0 0 16px 2px var(--shadow-colors),
      16px 16px 32px 4px var(--shadow-colors);
  }

  ${media.lessThan("medium")`
    transform: none;
  `}
`
