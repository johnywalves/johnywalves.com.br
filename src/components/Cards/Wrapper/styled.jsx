import styled, { css } from "styled-components"

const styleFocusable = css`
  width: 512px;
  min-height: ${({ article }) => (article ? "400px" : "312px")};
  transform: scale(0.8);

  &:hover {
    box-shadow: 0 0 16px 2px var(--shadowColors),
      16px 16px 32px 4px var(--shadowColors);
    transform: scale(1);

    & img {
      filter: none;
      opacity: 1 !important;
    }
  }
`

export const CardWrapper = styled.li`
  position: relative;
  transition: 0.5s ease-in-out;
  border-radius: 25px;
  box-shadow: 0 0 8px 1px var(--shadowColors),
    4px 4px 8px 1px var(--shadowColors);
  overflow: hidden;

  & img {
    opacity: 0.9 !important;
  }

  ${styleFocusable}
`

export const CardCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
