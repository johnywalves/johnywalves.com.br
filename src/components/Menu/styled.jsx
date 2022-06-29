import styled from "styled-components"

export const Wrapper = styled.div`
    position: fixed;
    top: 20px;
    right: 30px;
    display: flex;
    flex-direction: row;
    z-index: 10;
`

export const ThemeColorWrapper = styled.div`
    height: 30px;
    width: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`

export const ThemeColor = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s ease-in-out;
    box-shadow: inset 2px -2px var(--white), inset 8px -8px var(--white);

    .dark & {
        height: 60%;
        width: 60%;
        box-shadow: inset 18px -18px var(--white);
    }
`

export const MenuBox = styled.div`
    position: fixed;
    height: 0%;
    width: 0%;
    top: 0;
    right: 0;
    background-color: var(--highlight);
    z-index: 1;
    transition: 0.5s ease-in-out;
`

export const MenuCheck = styled.input`
    display: none;

    &:checked ~ div {
        height: 100%;
        width: 100%;
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
