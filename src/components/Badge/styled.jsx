import styled from "styled-components"

export const Text = styled.p`
  padding: 0.5rem 0.5rem 0.5rem 0;
  margin: 0.2rem 0.2rem 0.2rem 0;
  border-radius: 0.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-weight: 700;
  color: var(--background);
  background-color: ${({ skill }) =>
    skill ? "var(--bagdeSkill)" : "var(--highlight)"};

  span {
    font-weight: 500;
    font-size: 0.8rem;
  }

  &:before {
    content: "";
    display: block;
    height: 6px;
    width: 6px;
    margin: 0 0.5rem;

    background: var(--background);
    border: 2px solid var(--texts);
    border-radius: 50%;
  }
`
