import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  padding: 2rem;
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled(GatsbyImage)`
  box-shadow: 0 1px 4px var(--shadowColors);
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 8px 16px var(--shadowColors);
    transform: translateY(-1px);
  }
`
