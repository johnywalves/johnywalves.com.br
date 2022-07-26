import styled, { css } from "styled-components"

const highlightButton = css`
  border: 2px solid var(--highlight) !important;
  color: var(--highlight) !important;
`

const whiteButton = css`
  border: 2px solid var(--white) !important;
  color: var(--white) !important;
`

const lightButton = css`
  ${highlightButton}

  &:hover {
    ${whiteButton}
    background-color: var(--highlight) !important;
  }
`

const nonLightButton = css`
  ${whiteButton}

  &:hover {
    ${highlightButton}
    background-color: var(--white) !important;
  }
`

const styleButton = ({ light, selected }) => {
  if (selected) {
    return light
      ? css`
          ${whiteButton}
          background-color: var(--highlight) !important;
        `
      : css`
          ${highlightButton}
          background-color: var(--white) !important;
        `
  }

  return light ? lightButton : nonLightButton
}

export const Wrapper = styled.div`
  padding: 7px 30px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.25s ease-in-out;

  ${styleButton}
`
