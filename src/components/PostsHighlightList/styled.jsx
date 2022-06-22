import styled from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const ShowAllWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ShowAll = styled(Anilink)`
  color: var(--highlight);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`
