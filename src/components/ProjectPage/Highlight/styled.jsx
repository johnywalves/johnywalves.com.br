import styled, { css } from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

import { lightHighlight } from "../styled"

const formGrid = ({ revert }) => {
  if (revert) {
    return css`
      grid-template-columns: 2fr 3fr;

      ${media.lessThan("large")`
        grid-template-columns: 1fr;
      `}
    `
  }

  return css`
    grid-template-columns: 3fr 2fr;

    ${media.lessThan("large")`
      grid-template-columns: 1fr;
    `}
  `
}

export const Wrapper = styled.div`
  margin: var(--36px) 0;
  display: grid;
  gap: var(--24px);

  ${formGrid}
`

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageCover = styled(GatsbyImage)`
  height: 320px;
  width: 600px;
  object-fit: cover;
  object-position: top left;
  border-radius: 4px;

  ${lightHighlight}

  ${media.lessThan("medium")`
    height: 240px;
    width: 400px;
  `}
`

const alignContent = ({ revert }) => {
  if (revert) {
    return css`
      align-items: flex-end;

      p {
        text-align: right;
      }
    `
  }

  return css`
    align-items: flex-start;
  `
}

export const Content = styled.div`
  padding: var(--16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--texts);

  ${alignContent}

  ${media.lessThan("large")`
    align-items: center;
  `}
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: var(--16px) 0 0 0;
  gap: var(--16px);
  flex-wrap: wrap;
`

export const Link = styled.a`
  z-index: 1;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: var(--texts);
  z-index: 1;
`

export const Description = styled.p`
  color: var(--texts);
  margin: var(--24px) 0;
  z-index: 1;

  ${media.lessThan("large")`
    width: 75%;
    text-align: center !important;
  `}
`
