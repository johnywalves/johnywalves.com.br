import styled from "styled-components"

export const Wrapper = styled.li`
    transition: 0.5s ease-in-out;
    border-radius: 2%;
    box-shadow: 0 0 8px 1px var(--shadowColors), 
        4px 4px 8px 1px var(--shadowColors);
    filter: grayscale(100%);
    transform: scale(0.8);
    opacity: 0.85;
    overflow: hidden;

    &:hover {
        box-shadow: 0 0 16px 2px var(--shadowColors), 
            16px 16px 32px 4px var(--shadowColors);
        transform: scale(1);
        filter: none;
        opacity: 1;
    }
`

export const Cover = styled.div``
