import styled, { css } from "styled-components"

export const Content = styled.div`
  position: relative;
  width: calc(90% - 4rem);
  margin: 1rem 0 1.5rem 4rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    position: absolute;
    left: -2rem;
    top: 0.25rem;
    display: block;
    background-color: var(--highlight);
  }

  &:not(:last-child)::after {
    content: "";
    width: 0.3rem;
    height: calc(100% - 0.5rem);
    border-radius: 0.15rem;
    opacity: 0.5;
    position: absolute;
    left: -1.9rem;
    top: 1.5rem;
    display: block;
    background-color: var(--texts);
  }
`

export const Title = styled.p`
  color: var(--titles);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0.5rem 0;
`

export const Institution = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`

export const Date = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0.5rem 0;
`

const styleJob = css`
  margin-left: 16px;
  list-style-type: disc;
`

export const Description = styled.ul`
  margin: 1rem 0;

  & li {
    margin: 0;
    line-height: 1.35rem;
    ${({ job }) => job && styleJob}
  }
`

export const Award = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
  margin: 1rem 0;

  svg {
    height: 100%;
    margin: 0 0.75rem 0 0;
  }
`

export const Production = styled.a`
  color: var(--highlight);
`
