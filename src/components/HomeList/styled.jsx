import styled from "styled-components"
import media from "styled-media-query"

export const Wrapper = styled.div`
  color: var(--texts);
  padding: 2rem;

  a {
    text-decoration: none;
  }
`

export const Header = styled.header`
  margin: 0 0 2.5rem 0;
  color: var(--texts);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const Title = styled.h2`
  margin: 0 0.5rem 0 0;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 700;
`

export const Description = styled.small`
  margin: 0;
  text-align: left;
  font-size: 1.1rem;
  opacity: 1;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-row-gap: 1rem;
  grid-column-gap: 2%;

  ${media.lessThan("large")`
    grid-template-columns: 48% 48%;
    grid-column-gap: 4%;
  `}

  ${media.lessThan("medium")`
    margin: 0 calc((100% - 500px) / 2);
    grid-template-columns: 500px;
    grid-column-gap: 0;
  `}
`
