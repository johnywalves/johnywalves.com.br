import styled from "styled-components"
import media from "styled-media-query"

import PageWrapper from "styles/PageWrapper"

export const SearchWrapper = styled.main`
  ${PageWrapper}

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

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats,
  .ais-Hits-list {
    padding: var(--8px) var(--36px);

    ${media.lessThan("large")`
      padding: var(--8px) var(--16px);
    `}
  }

  .ais-Stats {
    color: var(--texts);
  }

  .ais-SearchBox {
    background: url("/vectors/lowpoly-shadow.svg");
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 2px solid var(--shadow-colors);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: var(--shadow-colors);
    }

    &:focus {
      border-bottom: 2px solid var(--highlight);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`

export const SearchPowerBy = styled.div`
  color: var(--texts);
  font-weight: 700;
  height: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  svg {
    height: 100%;
    margin: 0.5rem;
  }
`
