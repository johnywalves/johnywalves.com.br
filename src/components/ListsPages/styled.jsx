import styled, { css } from "styled-components"
import media from "styled-media-query"

import PageWrapper from "styles/PageWrapper"

const hasNavigator = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--24px);

  ${media.lessThan("large")`
      display: flex;
      flex-direction: column-reverse;
  `}
`

export const ListsPagesWrapper = styled.main`
  ${PageWrapper}
  padding-top: var(--48px);

  ${({ navigator }) => navigator && hasNavigator}

  & h2 {
    font-weight: 400;
    color: var(--texts);
  }

  & a {
    transition: color 0.25s ease-in-out;
  }

  & a,
  & a:visited {
    color: var(--texts);
  }

  & a:hover {
    color: var(--highlight);
  }

  ${media.lessThan("medium")`
    padding-top: 0;
  `}
`

export const ListsPagesList = styled.div``

export const ListsPagesNavigatorWrapper = styled.div`
  position: relative;
  display: flex;
`
