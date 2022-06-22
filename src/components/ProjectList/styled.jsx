import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const ImageCover = styled(GatsbyImage)`
  height: 8rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
`

export const ShowAllWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

export const ShowAll = styled(Anilink)`
  color: var(--highlight);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`
