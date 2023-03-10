import styled, { css } from "styled-components"
import { Link } from "gatsby"

const whiteLogoColor = css`
  &,
  &:hover,
  &:visited {
    color: var(--white);
  }
`

export const LogoWrapper = styled(Link)`
  font-size: var(--36px);
  font-weight: 700;
  transition: 0.5s ease-in-out;
  text-shadow: 1px 1px var(--shadow-colors);

  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &,
  &:hover,
  &:visited {
    color: var(--highlight);
  }

  ${({ whiteLogo }) => whiteLogo && whiteLogoColor}
`
