import styled from "styled-components"
import media from "styled-media-query"

import Anilink from "gatsby-plugin-transition-link/AniLink"

export const CardListWrapper = styled.div``

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 25px;
  list-style: none;
  flex-wrap: wrap;

  ${media.lessThan("medium")`
    gap: var(--8px);
  `}
`

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--32px);
  padding: var(--32px) 0 var(--16px);

  ${media.lessThan("medium")`
    gap: var(--16px);
    padding: 0;
  `}
`

export const Navigation = styled(Anilink)`
  z-index: 3;
`
