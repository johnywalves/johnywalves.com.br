import styled from "styled-components"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const LogoWrapper = styled(Anilink)`
  font-size: var(--36px);
  font-weight: 900;
  transition: 0.5s ease-in-out;
  text-shadow: 1px 1px var(--shadowColors);

  &,
  &:hover,
  &:visited {
    color: var(--highlight);
  }
`
