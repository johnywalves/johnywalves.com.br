import styled, { css } from "styled-components"

const selectedButton = css`
  border: 2px solid var(--highlight);
  color: var(--white) !important;
  background-color: var(--highlight);
`

const nonSelectedButton = css`
  border: 2px solid var(--white);
  color: var(--white) !important;
  background-color: transparent;

  .light-wrapper & {
    border: 2px solid var(--highlight);
    color: var(--highlight) !important;
  }

  &:hover {
    border: 2px solid var(--highlight);
    color: var(--highlight) !important;
    background-color: var(--white);

    .light-wrapper & {
      border: 2px solid var(--white);
      color: var(--white) !important;
      background-color: var(--highlight);
    }
  }
`

export const Wrapper = styled.div`
  padding: 7px 30px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.25s ease-in-out;

  ${({ selected }) => (selected ? selectedButton : nonSelectedButton)}
`
