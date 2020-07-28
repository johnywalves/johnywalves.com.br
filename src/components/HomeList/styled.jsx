import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  color: var(--texts);
  padding: 2rem;

  a {
    text-decoration: none;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
`

export const Description = styled.h4`
  text-align: center;
  font-size: 1.1rem;
  margin: 0.5rem 0 1.5rem;
  opacity: 0.75;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 2rem;
  grid-column-gap: 2%;

  ${media.lessThan("large")`
    grid-template-columns: 48% 48%;
    grid-column-gap: 4%;
  `}

  ${media.lessThan("medium")`
    grid-template-columns: 100%;
    grid-column-gap: 0;
  `}
`
