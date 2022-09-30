import styled, { css } from "styled-components"
import media from "styled-media-query"

const hasNavigator = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--24px);

  ${media.lessThan("large")`
      display: flex;
      flex-direction: column-reverse;
  `}
`

export const ListsPagesWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  min-height: var(--min-height);
  width: 100%;
  transition: opacity 0.4s;
  padding: var(--padding-content);
  padding-top: var(--48px);
  padding-bottom: var(--96px);

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position: top left, bottom right;

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
