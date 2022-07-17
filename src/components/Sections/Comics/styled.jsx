import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 45px 15px 80px;
  background-color: var(--background);

  & h2 {
    width: 100%;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
    color: var(--highlight);
  }
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`

export const Image = styled(GatsbyImage)`
  box-shadow: 0 0 2px var(--shadowColors), 2px 2px 4px var(--shadowColors);
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 0 4px var(--shadowColors), 4px 4px 8px var(--shadowColors);
    transform: translateY(-4px);
  }
`
