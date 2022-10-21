import styled from "styled-components"

export const SeparatorListWrapper = styled.div`
  margin: var(--56px) 0 var(--36px);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  & hr {
    height: 2px;
    width: calc((84% - var(--14px)) / 2);
    background-color: var(--shadow-colors);
    border: none;
    border-radius: 1px;
  }

  & svg {
    width: var(--14px);
    height: auto;
  }
`
