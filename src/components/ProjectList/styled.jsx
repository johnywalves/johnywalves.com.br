import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ImageCover = styled(GatsbyImage)`
  height: 8rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
`

export const ShowAll = styled.p`
  width: 100%;
  color: var(--highlight);
  text-align: center;
  cursor: pointer;
`
