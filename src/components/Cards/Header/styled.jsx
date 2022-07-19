import styled, { css } from "styled-components"

const alignLeft = css`
  align-items: flex-start;
`

const alignCenter = css`
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ${({ left }) => (left ? alignLeft : alignCenter)}

  margin-bottom: 30px;
`

export const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ light }) => (light ? "var(--highlight)" : "var(--white)")};
  margin-bottom: 12px;
`

export const Line = styled.div`
  width: 5rem;
  border: 4px solid
    ${({ light }) => (light ? "var(--highlight)" : "var(--white)")};
  border-radius: 4px;
`
