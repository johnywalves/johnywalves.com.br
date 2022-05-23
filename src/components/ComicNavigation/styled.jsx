import styled from "styled-components"

export const Navigation = styled.div`
  width: fit-content;
  margin: 1rem auto 0;

  a,
  p {
    color: var(--texts);
    text-decoration: none;
    margin: 0 1rem;
    font-size: min(1.5rem, 3vw);
  }

  p {
    display: inline;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    font-weight: 700;
  }

  a:hover {
    color: var(--highlight);
  }
`
