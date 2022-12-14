import styled, { css } from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const SectionArticlesWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);
`

export const SectionArticlesBoxShape = styled.div`
  position: absolute;
  left: -175px;
  z-index: 2;

  svg {
    transform: rotate(45deg);
    filter: blur(2px);
  }

  ${media.lessThan("medium")`
    left: -250px;
  `}
`

export const SectionArticlesBoxShapeOutline = styled.div`
  position: absolute;
  left: 50px;
  z-index: 2;

  svg {
    transform: rotate(190deg);
    filter: blur(2px);
  }
`

export const SectionArticlesImageCover = styled(GatsbyImage)``

export const SectionArticlesHighlightTitle = styled.h2`
  color: var(--texts);
  text-align: center;
  width: 100%;
`

export const SectionArticlesHighlightWrapper = styled.div`
  padding: var(--padding-content);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  gap: var(--16px);
`

const coverSizePosition = css`
  position: absolute !important;
  height: 100% !important;
  width: var(--256px) !important;
  left: 0;
  top: 0;
`

export const SectionArticlesHighlightCover = styled(GatsbyImage)``

export const SectionArticlesHighlightShadow = styled.div``

export const SectionArticlesHighlightContent = styled.div`
  p {
    font-weight: 500;
  }
`

export const SectionArticlesHighlightLink = styled(Link)`
  & article {
    position: relative;
    background-color: var(--background-card);
    min-height: var(--96px);

    display: flex;
    flex-direction: row;

    transition: all 0.25s ease-in-out;
    border-radius: var(--8px);
    box-shadow: 0 0 2px 2px var(--shadow-colors),
      4px 4px 8px 2px var(--shadow-colors);
  }

  &:hover article {
    border-radius: var(--8px);
    box-shadow: 0 0 8px 2px var(--shadow-colors),
      8px 8px 16px 4px var(--shadow-colors);
  }

  & ${SectionArticlesHighlightCover} {
    ${coverSizePosition}
    z-index: 1;

    border-top-left-radius: var(--8px);
    border-bottom-left-radius: var(--8px);

    transition: filter 0.25s ease-in-out;
    filter: saturate(0) brightness(1.15);
  }

  &:hover ${SectionArticlesHighlightCover} {
    filter: saturate(125%) brightness(1);
  }

  & ${SectionArticlesHighlightShadow} {
    ${coverSizePosition}
    z-index: 2;

    transition: all 0.25s ease-in-out;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--background-card) 50%
    );
  }

  &:hover ${SectionArticlesHighlightShadow} {
    left: var(--128px);
  }

  & ${SectionArticlesHighlightContent} {
    padding: var(--16px);
    margin-left: var(--36px);
    z-index: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.25s ease-in-out;

    & h3 {
      color: var(--highlight);
      margin-bottom: var(--4px);
      line-height: 150%;

      & span {
        background-color: var(--highlight);
        color: var(--background-card);
        padding: var(--2px) var(--8px);
        border-radius: var(--16px);
      }
    }

    & p {
      color: var(--texts);
      max-width: var(--512px);
      line-height: 125%;
    }
  }

  &:hover ${SectionArticlesHighlightContent} {
    margin-left: var(--72px);
  }
`
