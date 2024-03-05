import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 80px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;

  background: url("/vectors/triangle-wall-top.svg"),
    url("/vectors/triangle-wall-bottom.svg");
  background-color: var(--background);
  background-size: 30%;
  background-repeat: no-repeat;
  background-position:
    top left,
    bottom right;

  ${media.lessThan("medium")`
    background-size: 50%;
  `}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(512px, 40%) minmax(640px, 50%);
  gap: 30px;
  width: min-content;
  margin: 0 auto;

  ${media.lessThan("large")`
    grid-template-columns: 1fr;
  `}
`

export const Line = styled.div`
  display: block;
  width: 33%;
  height: 15px;
  background: linear-gradient(
    90deg,
    var(--highlight) 0%,
    var(--highlight) 50%,
    transparent 100%
  );
  margin-bottom: 25px;
`

export const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${media.lessThan("small")`
    width: 275px;
  `}
`

export const Description = styled.p`
  color: var(--texts);
  font-size: 1.125rem;
  margin: 15px 0;
  line-height: 150%;
  z-index: 2;
`

export const SocialWrapper = styled.div`
  z-index: 2;

  a,
  a:hover,
  a:visited {
    color: var(--highlight) !important;
  }
`

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  opacity: 0.85;
  overflow: hidden;

  & div:nth-child(1) > svg {
    transform: rotate(45deg) translateX(25%);
  }

  & div:nth-child(2) > svg {
    transform: rotate(15deg) translateX(-25%);
  }
`

export const BoxSide = styled.div`
  position: absolute;
  top: 0;
  left: -100px;
  height: 100%;
  opacity: 0.85;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
  }

  & svg {
    transform-origin: center;
  }

  & div:nth-child(1) > svg {
    transform: translateX(120px) rotate(-45deg);
  }

  & div:nth-child(2) > svg {
    transform: rotate(25deg);
  }

  & div:nth-child(3) > svg {
    transform: translateX(60px) rotate(-50deg);
  }

  ${media.lessThan("large")`
    left: -200px;
  `}
`

export const Image = styled(GatsbyImage)`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin: var(--16px) 0;

  display: flex;
  align-self: center;
  justify-self: center;

  mask-image: linear-gradient(45deg, black 45%, transparent);
  mask-mode: alpha;
  object-fit: cover;

  ${media.lessThan("medium")`
    margin: var(--16px);
    width: 200px;
    height: 200px;
  `}
`
