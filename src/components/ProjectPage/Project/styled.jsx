import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 360px;
  border-radius: 12px;
  box-shadow: 0 0 8px 1px var(--shadowColors),
    4px 4px 8px 1px var(--shadowColors);
`

export const Cover = styled.div`
  height: 120px;
  width: auto;
`

export const ImageCover = styled(GatsbyImage)`
  height: 140px;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
  object-position: top left;
  z-index: 1;
`

export const Content = styled.div`
  height: calc(100% - 120px);
  padding: var(--16px);
  border-top-left-radius: 30px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--highlight);
  background-color: var(--background-card);
  box-shadow: 0 -2px 8px var(--shadowColors);
  z-index: 2;
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin: var(--16px) 0 0 0;
  gap: var(--8px);
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: 0.25s ease-in-out;
    margin: 0.25rem;
    height: 2rem;
    width: 2rem;
  }

  &:hover {
    svg {
      margin: 0;
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`

export const Label = styled.div``

export const Title = styled.h2`
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 140%;
`

export const Description = styled.p`
  color: var(--texts);
`
