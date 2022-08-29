import styled from "styled-components"
import media from "styled-media-query"

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  padding: var(--padding-content);

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

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid var(--shadowColors);
    color: var(--texts);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: var(--texts);
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
