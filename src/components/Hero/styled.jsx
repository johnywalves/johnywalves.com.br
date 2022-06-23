import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, var(--white) 50%, var(--highlight) 50%);
`

export const ImageBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity .2s;
`

export const ImageCover = styled(GatsbyImage)`
    object-fit: cover;
    object-position: bottom;
`
