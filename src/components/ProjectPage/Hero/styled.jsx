import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  display: grid;
  padding-top: var(--36px);
  grid-template-columns: 50% 50%;
  background: linear-gradient(
    90deg,
    transparent 50%,
    var(--highlight-semi) 50%
  );
  overflow: hidden;
`

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--36px) 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const ImageCover = styled(GatsbyImage)`
  object-fit: contain;
`

export const Content = styled.div`
  padding: 0 var(--36px) 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

export const Title = styled.h1`
  color: var(--texts);
  font-size: 4rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: right;
  text-shadow: 0 0 1px var(--shadowColors), 2px 2px 1px var(--shadowColors);
`

export const Description = styled.p`
  color: var(--texts);
  font-size: 1.25rem;
  text-align: right;
  text-shadow: 0 0 1px var(--shadowColors), 2px 2px 1px var(--shadowColors);
`
