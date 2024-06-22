import styled from "styled-components"

import { lightHighlight } from "../styled"

export const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  z-index: 2;
`

export const Link = styled.a`
  cursor: pointer;
  padding: var(--16px) var(--24px);
  border-radius: var(--8px);
  background-color: var(--background-card);

  ${lightHighlight}

  &,
  &:hover,
  &:visited {
    color: var(--highlight);
  }
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 140%;

  ${Link}:hover & {
    text-decoration: underline;
  }
`

export const Description = styled.p`
  color: var(--texts);

  ${Link}:hover & {
    text-decoration: underline;
    text-decoration-color: var(--texts);
  }
`
