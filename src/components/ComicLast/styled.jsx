import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  padding: 2rem;
`

export const Image = styled(Img)`
  box-shadow: 0 1px 4px var(--shadowColors);
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 8px 16px var(--shadowColors);
    transform: translateY(-1px);
  }
`
