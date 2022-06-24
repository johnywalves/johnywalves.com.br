import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(90deg, var(--white) 50%, var(--highlight) 50%);
`

export const Box = styled.div`
    width: 100%;
    height: 20vh;
    background-color: red;
`

const Container = styled.div`
    position: absolute;
`

export const BoxTop = styled(Container)`
    right: 10%;
    top: 0;
    width: 30%;
    height: 30%;
    z-index: 1;
`

export const BoxBack = styled(Container)`
    left: 10%;
    top: 40%;
    width: 40%;
    height: 60%;
    z-index: 1;
    overflow: hidden;
`

export const BoxText = styled(Container)`
    left: 0;
    top: 50%;
    width: 100%;
    padding: 0 10vw;
    transform: translateY(-50%);
    background: linear-gradient(90deg, var(--highlight) 50%, var(--white) 50%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent; 
    z-index: 2;

    & h1 {
        width: 100%;
        font-size: 22.5vw;
        line-height: 100%;
        text-align: center;
    }

    & p {
        width: 100%;
        font-size: 2vw;
        font-weight: 700;
        text-align: right;
    }
`

export const ImageBox = styled(Container)`
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    transition: opacity 0.2s;
    z-index: 3;
`

export const ImageCover = styled(GatsbyImage)`
    object-fit: cover;
    object-position: bottom;
`
