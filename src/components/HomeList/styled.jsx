import styled from "styled-components"

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
  margin: .5rem 0 1.5rem;
  opacity: .75;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 2rem;
  grid-column-gap: 2%;
`
