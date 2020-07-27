import styled from "styled-components"

export const Card = styled.a`
  position: relative;
  width: 20rem;
  margin: 2.5rem 1rem 1rem 1rem;
  color: var(--texts);
  text-align: center;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 0.25rem;
  background-color: var(--white);
  box-shadow: 0 1px 4px var(--shadowColors);
  transition: all 0.2s ease-out;

  &:visited {
    color: var(--texts);
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px var(--shadowColors);
    transform: translateY(-1px);
  }
`

export const Icon = styled.div`
  color: var(--highlight);
  height: 5rem;
  width: 5rem;
  transform: translateY(-25%);
  margin: 0 auto;

  & svg {
    height: 100%;
    width: 100%;
  }
`

export const Name = styled.header`
  padding: 0 1rem 0.25rem 1rem;
  font-size: 1.35rem;
  font-weight: 700;
`

export const Institute = styled.div`
  padding: 0 1rem 0.25rem;
`

export const Moment = styled.div`
  padding: 0.5rem 1rem 1.5rem 1rem;
`
