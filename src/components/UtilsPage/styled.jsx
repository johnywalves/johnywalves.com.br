import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import styled, { css } from "styled-components"
import PageWrapper from "styles/PageWrapper"

export const neonThird = css`
  text-shadow: 0 0 7px var(--third), 0 0 10px var(--third),
    0 0 21px var(--third), 0 0 42px var(--third-light),
    0 0 82px var(--third-light), 0 0 92px var(--third-light),
    0 0 102px var(--third-light), 0 0 151px var(--third-light);
`

export const UtilsTitle = styled.h1`
  color: var(--white);
  font-size: min(12vw, 10rem);
  text-align: center;
  font-style: italic;
  z-index: 2;
  opacity: 0.9;

  ${neonThird}
`

export const ImageCover = styled(GatsbyImage)`
  position: absolute !important;
  bottom: 0;
  z-index: 1;
`

const lightSection = css`
  background: url("/vectors/neon-particles-top.svg"),
    url("/vectors/neon-particles-bottom.svg");
  background-color: var(--background);
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`

const nonlightSection = css`
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);
  min-height: 0;
`

const centerContent = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg"), url("/vectors/waves.svg");
  background-color: var(--background);
  background-size: 30%, 30%, 100% 150%;
  background-repeat: no-repeat;
  background-position: top left, bottom right, right bottom;
`

export const UtilsSection = styled.section`
  position: relative;
  ${PageWrapper}

  ${({ light }) => (light ? lightSection : nonlightSection)}
  ${({ center }) => center && centerContent}

  & a {
    opacity: 0;
    filter: blur(4px);
    transform: scale(0.5);
    transition: all 1s;
  }

  & a.show {
    opacity: 1;
    filter: none;
    transform: scale(1);
  }

  a:nth-of-type(2) {
    transition-delay: 0.5s;
  }

  a:nth-of-type(3) {
    transition-delay: 1s;
  }

  a:nth-of-type(4) {
    transition-delay: 1.5s;
  }

  a:nth-of-type(5) {
    transition-delay: 2s;
  }

  a:nth-of-type(6) {
    transition-delay: 2.5s;
  }
`

export const BoxTopItem = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;

  & div:nth-child(1) > svg {
    filter: blur(1px);
    transform: rotate(120deg);
  }

  & div:nth-child(2) > svg {
    filter: blur(2px);
    transform: translateX(-60px) rotate(-45deg);
  }
`

export const BoxBottomItem = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;

  & div:nth-child(1) > svg {
    filter: blur(2px);
    transform: rotate(-15deg);
  }

  & div:nth-child(2) > svg {
    transform: rotate(15deg);
  }
`

export const CheatsheetsList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--24px);

  a {
    flex-grow: 1;
  }
`

export const UtilsToolList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--24px);
`

export const UtilsToolItem = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  min-width: 500px;
  height: 80px;
  font-size: 1.5rem;
  font-weight: 400;
  background-color: var(--highlight);
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px var(--shadow-colors),
    4px 4px 4px 1px var(--shadow-colors);

  & p {
    color: var(--white);
    vertical-align: middle;
    transition: all 0.5s;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  & svg {
    color: var(--white);
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover p {
    font-weight: 900;
  }
`
