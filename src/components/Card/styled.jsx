import styled from "styled-components"

export const Wrapper = styled.li`
    position: relative;
    width: 512px;
    height: 256px;
    transition: 0.5s ease-in-out;
    border-radius: 2%;
    box-shadow: 0 0 8px 1px var(--shadowColors), 
        4px 4px 8px 1px var(--shadowColors);
    transform: scale(0.8);
    overflow: hidden;
    background-color: var(--background);

    & img {
        filter: grayscale(100%);
        opacity: 0.85 !important;
    }

    & h3 {
        transform: translate(-50%, -50%) scale(1.25);
    }

    &:hover {
        box-shadow: 0 0 16px 2px var(--shadowColors), 
            16px 16px 32px 4px var(--shadowColors);
        transform: scale(1);

        & img {
            filter: none;
            opacity: 1 !important;
        }

        & h3 {
            background-color: var(--highlight);
            transform: translate(-50%, -50%) scale(1);
        }
    }
`

export const Cover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const Title = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 7px 30px; 
    border-radius: 20px;
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
    transition: 0.5s ease-in-out;
    color: var(--white);
    background-color: var(--highlightSemi);
`
