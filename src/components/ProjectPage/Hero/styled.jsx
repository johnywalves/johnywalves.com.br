import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import media from "styled-media-query"

import { neonHighlight } from "../styled"

export const Wrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: linear-gradient(90deg, transparent 50%, var(--highlight) 50%);
  overflow: hidden;

  ${media.lessThan("large")`
    grid-template-columns: 1fr;
  `}
`

export const Cover = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--64px) 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const ImageCover = styled(GatsbyImage)`
  object-fit: contain;
`

export const Content = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--white);
  font-weight: 400;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-style: italic;
  transform: rotate(-6deg);

  ${neonHighlight}

  & span:nth-child(1) {
    font-size: 10rem;
    line-height: 90%;
  }

  & span:nth-child(2) {
    font-size: 4rem;
    line-height: 80%;
  }

  & span:nth-child(3) {
    font-size: 5rem;
    line-height: 90%;
  }
`

export const Description = styled.p`
  color: var(--texts);
  font-size: 1.25rem;
  text-align: right;
  text-shadow: 0 0 1px var(--shadow-colors), 2px 2px 1px var(--shadow-colors);
`
