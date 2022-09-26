import styled, { css } from "styled-components"
import media from "styled-media-query"

const alignLeft = css`
  align-items: flex-start;
`

const alignCenter = css`
  text-align: center;
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

const widthFull = css`
  width: 100%;
`

const widthFit = css`
  width: fit-content;
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${({ fit }) => (fit ? widthFit : widthFull)};
  ${alignText}
`

const titleSize = ({ small }) =>
  !small
    ? css`
        font-size: 2.5rem;
        margin-bottom: 12px;
        font-weight: 700;

        ${media.lessThan("medium")`
          font-size: 1.5rem;
        `}
      `
    : css`
        font-size: 1.5rem;
        margin-bottom: 8px;
        font-weight: 500;

        ${media.lessThan("medium")`
          font-size: 1rem;
        `}
      `

const colorText = ({ light, dark }) => {
  if (light) {
    return "var(--highlight)"
  }
  if (dark) {
    return "var(--texts)"
  }
  return "var(--white)"
}

export const HeaderTitle = styled.h2`
  text-transform: uppercase;
  color: ${colorText};
  z-index: 2;

  ${titleSize}
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

export const HeaderLine = styled.div`
  width: 5rem;
  border-style: solid;
  border-color: ${colorText};
  z-index: 2;

  ${lineSize}
`
