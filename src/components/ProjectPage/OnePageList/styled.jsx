import styled from "styled-components"

export const Wrapper = styled.div``

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: var(--16px);
`

export const Link = styled.a`
  cursor: pointer;
  padding: var(--16px) var(--24px);
  border-radius: 2px;
  background-color: var(--background-card);
  box-shadow: 0 0 8px 1px var(--shadowColors),
    4px 4px 8px 1px var(--shadowColors);

  &,
  &:hover,
  &:visited {
    color: var(--highlight);
  }

  &:hover {
    text-decoration: underline;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 140%;
`

export const Description = styled.p`
  color: var(--texts);
`
