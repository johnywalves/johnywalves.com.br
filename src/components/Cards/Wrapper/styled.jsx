import styled from "styled-components"

export const Wrapper = styled.li`
  position: relative;
  width: 512px;
  min-height: ${(props) => (props.article ? "400px" : "312px")};
  transition: 0.5s ease-in-out;
  border-radius: 25px;
  box-shadow: 0 0 8px 1px var(--shadowColors),
    4px 4px 8px 1px var(--shadowColors);
  transform: scale(0.8);
  overflow: hidden;

  & img {
    filter: grayscale(1);
    opacity: 0.85 !important;
  }

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

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
