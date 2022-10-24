import styled, { css } from "styled-components"
import media from "styled-media-query"

export const neonHighlight = css`
  text-shadow: 0 0 7px var(--highlight), 0 0 10px var(--highlight),
    0 0 21px var(--highlight), 0 0 42px var(--highlight-light),
    0 0 82px var(--highlight-light), 0 0 92px var(--highlight-light),
    0 0 102px var(--highlight-light), 0 0 151px var(--highlight-light);
`

export const lightHighlight = css`
  box-shadow: 0 0 16px 4px var(--highlight-light);
`

export const lightThird = css`
  box-shadow: 0 0 16px 4px var(--third-light);
`

export const PageWrapper = styled.main`
  position: relative;
  width: 100%;
  padding: 0 0 200px 0;
  background: url("/vectors/mountains.svg");
  background-size: 100%;
  background-color: var(--background);
  background-repeat: no-repeat;
  background-position: bottom center;
`

export const BoxTop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;

  & div:nth-child(1) > svg {
    filter: blur(1px);
    transform: rotate(120deg);
  }

  & div:nth-child(2) > svg {
    filter: blur(2px);
    transform: translateX(-60px) rotate(-45deg);
  }
`

export const BoxRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  & div:nth-child(1) > svg {
    transform: rotate(45deg);
  }
`

export const BoxSide = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 40%;
  overflow: hidden;
`

export const SectionContainer = styled.section`
  padding: var(--padding-content);
  padding-top: var(--72px);
  padding-bottom: var(--72px);
`

export const ContainerHighlight = styled(SectionContainer)`
  position: relative;

  background: url("/vectors/neon-particles-bottom.svg");
  background-color: var(--background);
  background-repeat: no-repeat;
  background-position: bottom right;
`

export const ContainerSecondHighlight = styled(SectionContainer)`
  background: url("/vectors/neon-particles-top.svg"),
    url("/vectors/neon-particles-bottom.svg");
  background-color: var(--background);
  background-repeat: no-repeat;
  background-position: top left, bottom right;
`

export const ContainerOpenPage = styled(SectionContainer)`
  position: relative;
`

export const ContainerProject = styled(SectionContainer)`
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: var(--72px) 0 var(--24px);
  gap: var(--36px);

  ${media.lessThan("large")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const ListOther = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: var(--72px) 0 var(--24px);
  gap: var(--36px);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan("small")`
    grid-template-columns: 1fr;
  `}
`

export const ListOnePage = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: var(--72px) 0 var(--24px);
  gap: var(--36px);

  ${media.lessThan("medium")`
    justify-content: center;
  `}
`
