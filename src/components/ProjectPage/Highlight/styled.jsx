import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const formGrid = ({ revert }) => {
  if (revert) {
    return css`
      grid-template-columns: calc(40% - var(--24px)) 65%;
    `
  }

  return css`
    grid-template-columns: 65% calc(40% - var(--24px));
  `
}

export const Wrapper = styled.div`
  padding: var(--padding-content);
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
  box-shadow: 0 0 4px 1px var(--shadowColors),
    4px 4px 4px 1px var(--shadowColors);
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
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: var(--16px) 0 0 0;
  gap: var(--16px);
`

export const Link = styled.a``

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
  color: var(--texts);
`

export const Description = styled.p`
  color: var(--texts);
  margin: var(--24px) 0;
`
