import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { neonHighlight } from "../styled"

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: max(80vh, 600px);
  overflow: hidden;

  background: url("/vectors/waves.svg"),
    linear-gradient(90deg, transparent 50%, var(--highlight) 50%);
  background-color: var(--background);
  background-size: 50% 100%, 100%;
  background-repeat: no-repeat;
  background-position: left bottom, center;
`

export const Content = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 var(--36px);
`

export const Title = styled.h1`
  color: var(--white);
  font-weight: 400;
  text-align: center;
  display: flex;
  flex-direction: column;
  font-style: italic;
  transform: rotate(-6deg) translateY(20%);

  ${neonHighlight}

  & span:nth-child(1) {
    font-size: 11rem;
    line-height: 90%;
  }

  & span:nth-child(2) {
    font-size: 4rem;
    line-height: 80%;
  }

  & span:nth-child(3) {
    font-size: 6rem;
    line-height: 90%;
  }
`

export const ImageCover = styled(GatsbyImage)`
  height: 400px;
`

export const Cover = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  background: url("/vectors/lowpoly-shadow.svg");
`
