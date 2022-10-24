import { GatsbyImage } from "gatsby-plugin-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

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
  transform: rotate(-4deg);
  z-index: 2;
  opacity: 0.9;

  ${neonThird}
`

export const ImageCover = styled(GatsbyImage)`
  position: absolute;
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

export const UtilsToolItem = styled(Anilink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: var(--24px) var(--32px);
  width: fit-content;
  font-size: 1.5rem;
  font-weight: 900;
  background-color: var(--highlight);
  cursor: pointer;
  transition: all 0.25s;
  border-radius: 4px;
  box-shadow: 0 0 4px 1px var(--shadow-colors),
    4px 4px 4px 1px var(--shadow-colors);

  & p {
    color: var(--texts);
  }

  & svg {
    color: var(--texts);
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 8px 2px var(--shadow-colors),
      8px 8px 16px 4px var(--shadow-colors);
  }
`
