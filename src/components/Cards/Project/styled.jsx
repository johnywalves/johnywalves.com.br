import styled from "styled-components"

export const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.5rem;
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
