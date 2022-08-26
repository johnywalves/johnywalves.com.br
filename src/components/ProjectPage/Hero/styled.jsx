import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: var(--24px) 0;
  background: linear-gradient(
    90deg,
    transparent 50%,
    var(--highlight-semi) 50%
  );
  overflow: hidden;
`

export const Cover = styled.div`
  height: 300px;
  width: 600px;
  margin: var(--36px) 0;
  background-color: red;
  box-shadow: 0 0 8px 1px var(--shadowColors),
    4px 4px 8px 1px var(--shadowColors);
`

export const Content = styled.div`
  padding: var(--36px) 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  color: var(--texts);
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  text-shadow: 0 0 1px var(--shadowColors), 2px 2px 1px var(--shadowColors);
`

export const Description = styled.p`
  color: var(--texts);
  font-size: 1.25rem;
  text-shadow: 0 0 1px var(--shadowColors), 2px 2px 1px var(--shadowColors);
`
