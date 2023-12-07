import styled from "styled-components"

export const Wrapper = styled.section`
  max-width: 48rem;
  min-height: calc(100vh - 30rem);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 0 auto;
  padding: 1rem;

  color: var(--texts);

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`
