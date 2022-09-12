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
  box-shadow: 0 0 2px var(--shadowColors), 2px 2px 4px var(--shadowColors);
  transition: all 0.25s ease-out;

  &:hover {
    box-shadow: 0 0 4px var(--shadowColors), 4px 4px 8px var(--shadowColors);
    transform: translateY(-4px);
  }
`
