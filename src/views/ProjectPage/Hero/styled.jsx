import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

import { neonHighlight } from "../styled"

export const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: max(40vh, 500px);
  overflow: hidden;

  background: linear-gradient(90deg, transparent 50%, var(--highlight) 50%);
  background-color: var(--background);

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: url("/vectors/waves.svg") left bottom no-repeat;
    background-size: 100% 100%;
    opacity: 0.15;
    pointer-events: none;
    z-index: 0;
  }
`

export const Content = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 var(--36px);
  z-index: 2;
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
    font-size: 15rem;
    line-height: 90%;
  }

  & span:nth-child(2) {
    font-size: 12rem;
    line-height: 55%;
  }

  ${media.lessThan("large")`
    & span:nth-child(1) {
      font-size: 8rem;
    }

    & span:nth-child(2) {
      font-size: 4rem;
    }
  `}

  ${media.lessThan("small")`
    & span:nth-child(1) {
      font-size: 4rem;
    }

    & span:nth-child(2) {
      font-size: 2rem;
    }
  `}
`

export const Cover = styled.div`
  position: absolute;
  left: 50%;

  top: 0;
  width: 50%;
  height: 100%;
  background: url("/vectors/lowpoly-shadow.svg");
`

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

export const CodeWrapper = styled.div`
  position: absolute;
  left: 5%;
  bottom: 25%;
  width: 40%;
  max-width: 600px;
  color: var(--white);
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  opacity: 1;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.2);
  white-space: pre-wrap;
  word-wrap: break-word;
  z-index: 2;
  pointer-events: none;

  ${media.lessThan("medium")`
    font-size: 0.8rem;
    left: 2%;
    width: 46%;
    bottom: 20%;
  `}

  &::after {
    content: '|';
    animation: ${blink} 1s step-end infinite;
  }
`

