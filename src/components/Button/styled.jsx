import styled, { css } from "styled-components"

const colorBackground = ({ secondary }) =>
  !secondary
    ? css`
        background-color: var(--highlight) !important;
      `
    : css`
        background-color: var(--secondary) !important;
      `

const colorOutline = ({ secondary }) =>
  !secondary
    ? css`
        border: 2px solid var(--highlight) !important;
        color: var(--highlight) !important;
      `
    : css`
        border: 2px solid var(--secondary) !important;
        color: var(--secondary) !important;
      `

const highlightButton = css`
  ${colorOutline}
`

const whiteButton = css`
  border: 2px solid var(--white) !important;
  color: var(--white) !important;
`

const lightButton = css`
  ${highlightButton}

  &:hover {
    ${whiteButton}
    ${colorBackground}
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
          ${colorBackground}
        `
      : css`
          ${highlightButton}
          background-color: var(--white) !important;
        `
  }

  return light ? lightButton : nonLightButton
}

export const Wrapper = styled.div`
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 900;
  text-align: center;
  vertical-align: middle;
  transition: 0.25s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  ${styleButton}

  & svg {
    height: 1.25rem;
    width: 1.25rem;
    margin: 0 0.5rem 0 0;
  }
`
