import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem;
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 600;
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: var(--texts);

    line-height: 1.8rem;
    cursor: pointer;
    width: 100%;
  }

  a:hover {
    color: var(--highlight);
  }
`
