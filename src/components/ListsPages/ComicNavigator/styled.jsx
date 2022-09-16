import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const ArticleComicNavigatiorWrapper = styled.nav`
  width: 100%;
  margin: var(--24px) 0 0;
`

export const ArticleCategoryNavigatiorCover = styled.div`
  position: relative;
  height: 300px;
  margin: 0 0 var(--16px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ArticleCategoryNavigatiorImage = styled(GatsbyImage)``
