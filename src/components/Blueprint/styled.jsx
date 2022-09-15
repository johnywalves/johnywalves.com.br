import styled, { css } from "styled-components"

const contentWrapper = css`
  padding-top: 80px;
`

export const BlueprintWrapper = styled.main`
  min-height: 100vh;

  ${({ content }) => content && contentWrapper};
`
