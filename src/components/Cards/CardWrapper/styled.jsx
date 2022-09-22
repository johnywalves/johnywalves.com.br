import styled from "styled-components"

export const CardWrapperCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
`

export const CardWrapperWrapper = styled.li`
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  width: 512px;
  min-height: ${({ article }) => (article ? "400px" : "312px")};
  z-index: 2;

  box-shadow: 0 0 8px 1px var(--shadow-colors),
    4px 4px 8px 1px var(--shadow-colors);
  transform: scale(0.8);
  transition: all 0.5s ease-in-out;

  ${CardWrapperCover} {
    transform: rotate(11.25deg) translate(3%, 4%) scale(1.5);
    filter: grayscale(1);
  }

  &:hover {
    box-shadow: 0 0 16px 2px var(--shadow-colors),
      16px 16px 32px 4px var(--shadow-colors);
    transform: scale(1);

    ${CardWrapperCover} {
      transform: none;
      filter: none;
    }
  }
`
