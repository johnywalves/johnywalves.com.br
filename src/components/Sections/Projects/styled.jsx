import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  background-color: var(--highlight);

  & h2 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    color: var(--white);
  }
`

export const ImageCover = styled(GatsbyImage)`
  height: 308px;
  width: 100%;
  object-fit: cover;
  object-position: top left;
`
