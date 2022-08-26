import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding-content);
  margin: var(--36px) 0;
  display: grid;
  grid-template-columns: 50% 40%;
  gap: 5%;
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

export const Content = styled.div`
  padding: var(--16px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--texts);
`

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: var(--16px) 0 0 0;
  gap: var(--16px);
`

export const Link = styled.a``

export const Label = styled.div`
  color: var(--texts);
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  text-transform: uppercase;
`

export const Description = styled.p`
  margin: var(--24px) 0;
`
