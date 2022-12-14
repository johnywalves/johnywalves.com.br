import styled from "styled-components"
import media from "styled-media-query"

import { Link } from "gatsby"

export const CardListWrapper = styled.div``

export const Content = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: var(--8px);
  list-style: none;
  flex-wrap: wrap;
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

export const Navigation = styled(Link)`
  z-index: 3;
`
