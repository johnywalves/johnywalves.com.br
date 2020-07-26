import styled from "styled-components"

export const Card = styled.a`
  position: relative;
  width: 20rem;
  margin: 2.5rem 1rem 1rem 1rem;
  color: var(--texts);
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 1rem;
  background-color: var(--white);
  box-shadow: 4px 4px 8px 0 var(--texts);
  transition: box-shadow 0.3s;

  &:visited {
    color: var(--texts);
  }

  &:hover {
    color: var(--highlight);
    cursor: pointer;
    box-shadow: 8px 8px 16px 0 var(--texts);
  }
`

export const Icon = styled.div`
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
