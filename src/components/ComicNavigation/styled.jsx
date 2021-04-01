import styled from "styled-components"

export const Navigation = styled.div`
  width: fit-content;
  margin: 1rem auto 0;

  a,
  p {
    color: var(--titles);
    text-decoration: none;
    margin: 0 1rem;
    font-size: min(1.5rem, 3vw);
    font-weight: 700;
  }

  p {
    opacity: 0.5;
    display: inline;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    color: var(--highlight);
  }
`
