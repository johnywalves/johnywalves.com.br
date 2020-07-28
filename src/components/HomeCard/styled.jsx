import styled from "styled-components"

export const Wrapper = styled.article`
  color: var(--texts);
  text-align: center;

  height: 100%;
  border-top: ${(props) =>
    props.cover ? "none" : "3px var(--highlight) solid"};
  border-radius: 0.25rem;
  background-color: var(--white);
  box-shadow: 0 1px 4px var(--shadowColors);
  transition: all 0.2s ease-out;

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
    color: var(--texts);
    box-shadow: 0 8px 16px var(--shadowColors);
    transform: translateY(-1px);
  }
`

export const Content = styled.div`
  padding: 1rem 1.5rem 0.5rem;
`

export const Subtitle = styled.h3`
  color: var(--Texts);
  margin: 0.4rem 0 0.2rem;
  font-size: 0.85rem;
  font-weight: 400;
  opacity: 0.85;
`

export const Title = styled.h2`
  color: var(--Texts);
  font-size: 1.5rem;
  font-weight: 700;

  min-height: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const Description = styled.p`
  color: var(--Texts);
  margin: 1rem 0;
  font-size: 1.1rem;
  text-align: ${(props) => (props.centerDescription ? "center" : "left")};
`

export const Navicon = styled.div`
  display: flex;
  margin: 1rem 0 1rem;
`

export const Icon = styled.a`
  display: block;
  min-height: 1.5rem;
  width: 1.5rem;
  margin: 0 1rem 0 0;

  & svg {
    height: 100%;
    width: 100%;
  }
`

export const Tags = styled.div`
  margin: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
`
