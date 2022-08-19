import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    90deg,
    var(--background) 50%,
    var(--highlight) 50%
  );
`

const Container = styled.div`
  position: absolute;
`

export const BoxTop = styled(Container)`
  top: 0;
  right: 15%;
  width: 30%;
  height: 50%;
  z-index: 1;
`

export const BoxBack = styled(Container)`
  top: 0;
  left: 20%;
  width: 30%;
  height: 100%;
  z-index: 2;
  overflow: hidden;
`

export const BoxShadow = styled(Container)`
  top: 15%;
  right: 50%;
  width: 35%;
  height: 85%;
  z-index: 1;
  overflow: hidden;

  svg {
    transform-origin: center;
    transform: rotate(-15deg);
  }
`

export const BoxText = styled(Container)`
  left: 0;
  top: 50%;
  width: 100%;
  padding: 0 10vw;
  transform: translateY(-50%);
  background: linear-gradient(
    90deg,
    var(--highlight) 50%,
    var(--background) 50%
  );
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
  filter: drop-shadow(0 0 2px var(--shadowColors))
    drop-shadow(4px 4px 4px var(--shadowColors));
`

export const ImageCover = styled(GatsbyImage)`
  object-fit: cover;
  object-position: bottom;
`

export const WrapperSocial = styled(Container)`
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
`
