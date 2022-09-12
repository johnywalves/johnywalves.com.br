import styled from "styled-components"

export const Wrapper = styled.article`
  color: var(--texts);
  text-align: left;

  height: 100%;
  border-top: ${(props) =>
    props.cover ? "none" : "3px var(--highlight) solid"};
  border-radius: 0.25rem;
  box-shadow: 0 0 2px var(--shadowColors), 2px 2px 4px var(--shadowColors);
  transition: all 0.25s ease-out;

  body.dark & {
    background-color: var(--mediumBackground);
  }

  img {
    border-radius: 0.25rem 0.25rem 0 0;
  }

  a {
    color: var(--texts);
  }

  &:visited {
    color: var(--texts);
  }

  &:hover {
    box-shadow: 0 0 4px var(--shadowColors), 4px 4px 8px var(--shadowColors);
    transform: translateY(-4px);
  }

  a &:hover {
    color: var(--highlight);
  }
`

export const Content = styled.div`
  padding: 1rem 1.5rem 0.5rem;
`

export const Title = styled.h2`
  color: var(--Texts);
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  margin: 0 0 1rem;

  a:hover & {
    color: var(--highlight);
  }
`

export const Subtitle = styled.h3`
  color: var(--Texts);
  margin: 0.2rem 0;
  font-size: 0.9rem;
  font-weight: 400;
  opacity: 0.85;

  a:hover & {
    color: var(--highlight);
  }
`

export const Description = styled.p`
  color: var(--Texts);
  margin: 0.5rem 0 1rem;
  font-size: 1rem;

  a:hover & {
    color: var(--highlight);
  }
`

export const Navicon = styled.div`
  display: flex;
  margin: 1rem 0 1rem;
`

export const Icon = styled.a`
  display: block;
  min-height: 2rem;
  width: 2rem;
  margin: 0 1rem 0 0;

  &:hover {
    color: var(--highlight);
  }

  & svg {
    height: 100%;
    width: 100%;
  }
`

export const Tags = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--16px);
`
