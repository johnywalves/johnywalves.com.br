import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  background-color: var(--highlight);
`

export const ImageCover = styled(GatsbyImage)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top left;
`
