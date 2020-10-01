import styled from "styled-components"

export const Text = styled.p`
  font-weight: 700;
  padding: 0.5rem;
  margin: 0.2rem;
  border-radius: 0.25rem;
  color: var(--white);
  background-color: ${({ skill }) =>
    skill ? "var(--bagdeSkill)" : "var(--highlight)"};

  span {
    font-weight: 500;
    font-size: 0.8rem;
  }
`
