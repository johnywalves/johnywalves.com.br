import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

import { GatsbyImage } from "gatsby-plugin-image"
import Anilink from "gatsby-plugin-transition-link/AniLink"

export const HeaderWrapper = styled.header`
  z-index: 10;
`

export const MenuBar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 80px;
  width: 100%;
  padding: 0 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  z-index: 10;
  transition: 0.5s ease-in-out;

  & div {
    display: flex;
    flex-direction: row;
  }

  &.nohero {
    background: url("/vectors/lowpoly-shadow.svg");
    background-color: var(--highlight);

    & a,
    & a:hover,
    & a:visited {
      color: var(--white) !important;
    }
  }
`

export const MenuTop = styled.ul`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  margin: 0 var(--24px) var(--16px) 0;
  gap: var(--24px);

  & li {
    align-self: flex-end;

    & a,
    & span {
      line-height: 90%;
    }
  }

  ${media.lessThan("large")`
    display: none;
  `}
`

export const MenuTopLink = styled(Anilink)`
  font-size: var(--16px);
  font-weight: 900;

  &,
  &:hover,
  &:visited {
    color: var(--white);
  }

  & span {
    transition: 0.25s ease-in-out;
  }

  &.active {
    font-weight: 300;
    cursor: default;
  }

  &:not(.active):hover {
    & span {
      font-size: var(--24px);
    }
  }
`

export const ThemeColorWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 30px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  cursor: pointer;

  & > span {
    position: absolute;
    display: block;
    width: 0;
    height: 2px;
    border-radius: 2px;
    transition: 0.5s ease-in-out;
    transform-origin: left center;
    background-color: var(--white);
  }

  & > span:nth-child(1) {
    top: 14px;
    left: -3px;
  }

  & > span:nth-child(3) {
    bottom: -4px;
    left: 15px;
    transform: rotate(-90deg);
  }

  & > span:nth-child(5) {
    top: 14px;
    right: -3px;
  }

  & > span:nth-child(7) {
    top: -4px;
    left: 15px;
    transform: rotate(90deg);
  }

  & > span:nth-child(2) {
    bottom: 2px;
    left: 1px;
    transform: rotate(-45deg);
  }

  & > span:nth-child(4) {
    bottom: 2px;
    right: 1px;
    transform-origin: right center;
    transform: rotate(45deg);
  }

  & > span:nth-child(6) {
    top: 2px;
    right: 1px;
    transform-origin: right center;
    transform: rotate(-45deg);
  }

  & > span:nth-child(8) {
    top: 2px;
    left: 1px;
    transform: rotate(45deg);
  }

  .dark & > span {
    width: 6px;
  }
`

export const ThemeColor = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  box-shadow: inset 2px -2px var(--white), inset 8px -8px var(--white);

  .dark & {
    height: 60%;
    width: 60%;
    border-radius: 50%;
    box-shadow: inset 18px -18px var(--white);
  }
`

export const MenuBox = styled.div`
  position: fixed;
  height: 0%;
  width: 0%;
  top: -30%;
  right: -30%;
  z-index: 3;
  transition: 0.5s ease-in-out;
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);
  border-radius: 50% 25% / 50% 25%;
  z-index: 8;
`

export const MenuLinksShow = keyframes`
  from { opacity: 0; }
  to { opacity: 0.5; }
`

export const MenuBackground = styled(GatsbyImage)`
  opacity: 0;
  display: none;
  position: fixed;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  border-radius: 30% 80% 80% 30% / 55%;
`

export const MenuLinks = styled.ul`
  opacity: 0;
  display: none;
  position: fixed;
  top: 50%;
  left: 66%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  list-style: none;
  color: var(--white);
  font-size: var(--80px);
  font-weight: 700;

  &.active {
    opacity: 1;
  }
`

export const MenuLinksLink = styled(Anilink)`
  text-decoration: none;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 1;

    & span {
      color: var(--white);
    }
  }

  & span {
    color: var(--texts);
  }
`

export const MenuCheck = styled.input`
  display: none;

  &:checked ~ div {
    height: 150%;
    width: 150%;
  }

  &:checked ~ p {
    color: var(--white);
  }

  &:checked ~ div > ul,
  &:checked ~ div > .gatsby-image-wrapper {
    display: block;
    animation: ${MenuLinksShow} 1.5s 0.5s ease forwards;
  }

  &:checked ~ nav > p {
    color: var(--white);
  }

  &:checked ~ nav > div > label span {
    transform: rotate(45deg);
  }

  &:checked ~ nav > div > label span::before {
    transform: rotate(-90deg);
    top: 0;
  }

  &:checked ~ nav > div > label span::after {
    transform: rotate(-90deg);
    bottom: 0;
  }
`

export const MenuWrapper = styled.label`
  height: 30px;
  width: 30px;
  margin: 10px;
  cursor: pointer;
  z-index: 2;
`

export const Hamburger = styled.span`
  position: relative;
  display: block;
  background: var(--white);
  width: 30px;
  height: 4px;
  top: 13px;
  left: 0;
  border-radius: 2px;
  transition: 0.5s ease-in-out;

  &::before,
  &::after {
    content: "";
    display: block;
    background: var(--white);
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 2px;
    transition: 0.5s ease-in-out;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
`
