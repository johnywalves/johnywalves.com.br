import styled, { css } from "styled-components"

const hasNavigator = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--24px);
`

export const ListsPagesWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  width: 100%;
  transition: opacity 0.4s;
  padding: var(--padding-content);
  padding-top: var(--48px);

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
`

export const ListsPagesList = styled.div``

export const ListsPagesNavigatorWrapper = styled.div`
  position: relative;
  display: flex;
`

export const ListsPagesNavigator = styled.nav`
  position: sticky;
  top: 100px;

  h2 {
    color: var(--texts);
    margin: 0 0 var(--16px) 0;
    font-weight: 700;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: var(--8px);
    flex-wrap: wrap;
  }

  li {
    background-color: var(--highlight);
    border-radius: 15px;
    transition: 0.25s ease-in-out;

    & p {
      padding: var(--8px) var(--16px);
      font-weight: 700;
      text-transform: uppercase;
    }

    & a,
    & a:visited,
    & a:hover {
      color: var(--background);
    }

    &:hover {
      opacity: 0.5;
    }
  }
`
