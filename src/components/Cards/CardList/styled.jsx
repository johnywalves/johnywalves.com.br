import styled from "styled-components"

import Anilink from "gatsby-plugin-transition-link/AniLink"

export const CardListWrapper = styled.div``

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 25px;
  list-style: none;
  flex-wrap: wrap;
`

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 35px 0 15px;
`

export const Navigation = styled(Anilink)`
  z-index: 3;
`
