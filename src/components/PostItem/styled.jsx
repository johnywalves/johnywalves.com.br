import styled from "styled-components";
import media from "styled-media-query";
import Anilink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image";

export const PostItemLink = styled(Anilink)`
    color: var(--texts);
    display: flex;
    text-decoration: none;

    body#grid & {
        background-color: var(--background);
    }

    &:hover {
        color: var(--highlight);
    }
`

export const PostItemWrapper = styled.section`
    align-items: center;
    border-bottom: 1px solid var(--borders);
    display: flex;
    padding: 2rem 3rem;
    width: 100%;

    body#grid & {
        border: none;
        padding: 2rem 1rem;
        flex-direction: column;
        justify-content: center;
    }

    ${media.lessThan("large")`
        align-items: flex-start;
        flex-direction: column;
        padding: 2rem 1rem;
    `}    
`

export const PostItemImageFeatured = styled(Img)`
    align-items: center;
    border-radius: 50%;
    color: var(--white);
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    justify-content: center;
 
    ${media.lessThan("large")`
        display: none;
        border-radius: 0;
        font-size: 1rem;
        min-height: auto;
        min-width: auto;
        padding: .2rem .5rem;
        margin-bottom: .7rem;
    `}    

    body#grid & {
        margin-bottom: 1.5rem;
    }
`

export const PostItemCoverImage = styled.div`
    align-items: center;
    border-radius: 50%;
    color: var(--white);
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    justify-content: center;
    height: 120px;
    width: 120px;
    background-position: center;
    background-size: cover;

    ${media.lessThan("large")`
        display: none;
        border-radius: 0;
        font-size: 1rem;
        min-height: auto;
        min-width: auto;
        padding: .2rem .5rem;
        margin-bottom: .7rem;
    `}    

    body#grid & {
        margin-bottom: 1.5rem;
    }
`

export const PostItemTag = styled.div`
    align-items: center;
    background-color: ${props => props.background ? props.background : "var(--highlight)"};
    border-radius: 50%;
    color: var(--white);
    display: flex;
    font-size: 1.3rem;
    font-weight: 700;
    justify-content: center;
    min-height: 120px;
    min-width: 120px;

    body#grid & {
        margin-bottom: 1.5rem;
    }
`

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;

    ${media.lessThan("large")`
        margin: 0;
    `}    
`

export const PostItemDate = styled.time`
    font-size: 0.9rem;
`

export const PostItemTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0.2rem 0 0.5rem;

    body#grid & {
        line-height: 1.1;
        margin: 0.8rem 0;
    }
`

export const PostItemDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2;
`