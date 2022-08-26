import styled, { css } from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  border-radius: var(--8px);
  padding: 80px var(--16px) var(--16px);
  margin: 80px 0 0 0;
  color: var(--highlight);
  box-shadow: 2px 2px 4px 1px var(--shadowColors);
  z-index: 2;

  background: url("/vectors/triangle-wall-top.svg");
  background-color: var(--background-card);
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: top left;
`

export const Cover = styled.div`
  position: absolute;
  left: var(--16px);
  top: -80px;
  height: 160px;
  width: 328px;
  border-radius: var(--8px);
  overflow: hidden;
  box-shadow: 0 0 8px 1px var(--shadowColors),
    4px 4px 8px 1px var(--shadowColors);
`

export const ImageCover = styled(GatsbyImage)`
  object-fit: cover;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: flex-end;
  margin: var(--16px) 0 0 0;
  gap: var(--8px);
`

export const Label = styled.div`
  color: var(--texts);
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.2rem;
  height: 2.4rem;
  text-transform: uppercase;
  margin: var(--24px) 0 var(--8px);
`

export const Description = styled.p``

const negativeLink = css`
  border-radius: 50%;
  background-color: var(--highlight);
  background-clip: padding-box;

  svg {
    color: var(--background);
    height: 80%;
    width: 80%;
  }
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.25rem solid transparent;
  height: 2.5rem;
  width: 2.5rem;
  transition: 0.25s ease-in-out;

  svg {
    height: 100%;
    width: 100%;
  }

  &:hover {
    border-width: 0;
  }

  ${({ negative }) => negative && negativeLink}
`
