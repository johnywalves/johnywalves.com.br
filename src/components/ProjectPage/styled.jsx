import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 15px 25px 80px;
`

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ImageCover = styled(GatsbyImage)`
  height: 308px;
  width: 100%;
  object-fit: cover;
  object-position: top left;
`
