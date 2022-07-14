import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  background-color: var(--highlight);
  padding: 120px 0;
`

export const ImageCover = styled(GatsbyImage)`
  height: 308px;
  width: 100%;
  object-fit: cover;
  object-position: top left;
`
