import styled from "styled-components"

export const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 7px 30px;
  border-radius: 20px;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  transition: 0.5s ease-in-out;
  color: var(--white);
  background-color: var(--highlightSemi);
  transform: translate(-50%, -50%) scale(1.25);

  li:hover & {
    background-color: var(--highlight);
    transform: translate(-50%, -50%) scale(1);
  }
`
