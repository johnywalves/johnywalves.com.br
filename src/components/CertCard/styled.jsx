import styled from "styled-components";

export const Card = styled.div`
    position: absolute;

    left: ${props => props.open ? "0" : `${props.index % 4 * 23 + 2}%`};
    top: ${props => props.open ? "0" : `${Math.trunc(props.index / 4) * 25}vh`};
    width: ${props => props.open ? "100%" : "20%"};
    height: ${props => props.open ? "100vh" : "22vh"};
    z-index: ${props => props.open ? "1" : "0"};

    background-color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: left 1.5s, top 1.5s, width 1.5s, height 1.5s, box-shadow 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    figure {
        margin: 0;
        width: 100%;
        height: 80%;
        background-image: url(${props => props.img});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`
