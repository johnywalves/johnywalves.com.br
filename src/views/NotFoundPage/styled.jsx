import styled from "styled-components"
import media from "styled-media-query"

export const NotFoundWrapper = styled.div`
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);
  width: 100%;
  height: 100vh;
  padding: 0 var(--48px);
  color: var(--texts);
  overflow: hidden;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--48px);

  svg {
    width: 100%;
    height: 100%;
  }

  a {
    z-index: 1;
  }
`

export const BoxTriangle = styled.div`
  position: absolute;
  top: -10%;
  right: 15%;
  width: 60%;
  height: 35%;
`

export const BoxArrow = styled.div`
  position: absolute;
  bottom: -15%;
  left: 5%;
  width: 20%;
  height: 50%;
`

export const BoxArrowOutline = styled.div`
  position: absolute;
  bottom: -10%;
  left: 5%;
  width: 30%;
  height: 40%;
`

export const BoxSocial = styled.div`
  position: absolute;
  top: 50%;
  left: var(--36px);
  transform: translateY(-50%);

  & a,
  & a:hover,
  & a:visited {
    color: var(--texts);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--texts);
  }

  ${media.lessThan("medium")`
    left: var(--16px);
  `}
`

export const NotFoundTitle = styled.h1`
  font-size: 18rem;
  line-height: 80%;
  z-index: 1;

  ${media.lessThan("medium")`
    font-size: 10rem;
  `}
`

export const NotFoundDescription = styled.h2`
  font-size: 2rem;
  text-align: center;
  line-height: 100%;
  z-index: 1;

  ${media.lessThan("medium")`
    font-size: 1.5rem;
  `}
`
