import styled, { keyframes } from "styled-components"

import Anilink from "gatsby-plugin-transition-link/AniLink"

export const Wrapper = styled.div`
    position: fixed;
    top: 20px;
    right: 30px;
    display: flex;
    flex-direction: row;
    z-index: 10;
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
    background-color: var(--highlight);
    z-index: 1;
    transition: 0.5s ease-in-out;
    border-radius: 50% 25% / 50% 25%;
`

export const MenuLinksShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const MenuLinks = styled.ul`
    opacity: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease-in-out;
    list-style: none;
    font-size: var(--64px);
`

export const MenuLinksLink = styled(Anilink)`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--highlight);
  }
`

export const MenuCheck = styled.input`
    display: none;

    &:checked ~ div {
        height: 150%;
        width: 150%;
    }

    &:checked ~ div > ul {
        animation: ${MenuLinksShow} 1.5s 0.5s ease forwards;
    }

    &:checked ~ div > {
        height: 150%;
        width: 150%;
    }

    &:checked ~ label span {
      transform: rotate(45deg);
    }

    &:checked ~ label span::before {
        transform: rotate(-90deg);
        top: 0;
    }

    &:checked ~ label span::after {
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
