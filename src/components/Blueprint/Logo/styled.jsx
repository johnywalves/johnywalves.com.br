import styled, { css } from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

const whiteLogoColor = css`
  &,
  &:hover,
  &:visited {
    color: var(--white);
  }
`

export const LogoWrapper = styled(Anilink)`
  font-size: var(--36px);
  font-weight: 900;
  transition: 0.5s ease-in-out;
  text-shadow: 1px 1px var(--shadow-colors);

  &,
  &:hover,
  &:visited {
    color: var(--highlight);
  }

  ${({ whiteLogo }) => whiteLogoColor}
`
