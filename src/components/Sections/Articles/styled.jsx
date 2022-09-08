import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);
`

export const BoxShape = styled.div`
  position: absolute;
  left: -175px;
  z-index: 2;

  svg {
    transform: rotate(45deg);
    filter: blur(2px);
  }
`

export const BoxShapeOutline = styled.div`
  position: absolute;
  left: 50px;
  z-index: 2;

  svg {
    transform: rotate(190deg);
    filter: blur(2px);
  }
`

export const ImageCover = styled(GatsbyImage)``
