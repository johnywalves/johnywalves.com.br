import styled, { css } from "styled-components"

const alignLeft = css`
  align-items: flex-start;
`

const alignCenter = css`
  align-items: center;
`

const alignRight = css`
  align-items: flex-end;
`

const alignText = ({ left, right }) => {
  if (left) {
    return alignLeft
  }
  if (right) {
    return alignRight
  }
  return alignCenter
}

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${alignText}
`

const titleSize = ({ small }) =>
  !small
    ? css`
        font-size: 2.5rem;
        margin-bottom: 12px;
        font-weight: 700;
      `
    : css`
        font-size: 1.5rem;
        margin-bottom: 8px;
        font-weight: 500;
      `

export const Title = styled.h2`
  ${titleSize}
  text-transform: uppercase;
  color: ${({ light }) => (light ? "var(--highlight)" : "var(--white)")};
`

const lineSize = ({ small }) =>
  !small
    ? css`
        border-radius: 4px;
        border-width: 4px;
      `
    : css`
        border-radius: 2px;
        border-width: 2px;
      `

export const Line = styled.div`
  width: 5rem;
  border-style: solid;
  border-color: ${({ light }) => (light ? "var(--highlight)" : "var(--white)")};
  ${lineSize}
`
