import styled, { keyframes } from "styled-components"
import media from "styled-media-query"

export const ArticleComicNavigatorWrapper = styled.nav`
  width: 100%;
  margin: var(--24px) 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan("large")`
      margin: 0;
  `}
`

export const eyeBlink = keyframes`
  0%, 7%, 13%, 47%, 53%, 79%, 85%, 100% { 
    ry: 32
  }
  10%, 50%, 82% {
    ry: 0
  }
`

export const breathing = keyframes`
  0%, 100% { 
    transform: scale(1);
  }
  50% {
    transform: scale(1.03);
  }
`

export const bounce = keyframes`
  0%, 40%, 60%,  100% {
    transform: none;
  }
  50% {
    transform: translateY(-3px);
  }
`

export const ArticleCategoryNavigatorCover = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  margin: 0 0 var(--16px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    transparent 0%,
    transparent 50%,
    var(--highlight) 50%,
    var(--highlight) 100%
  );
  transform: rotate(65deg);

  svg {
    transform: scale(-1, 1) translate(-28%, 11%) rotate(65deg);
  }

  & .headandhair {
    animation: ${bounce} 5s ease-in-out infinite;
  }

  & .eye {
    animation: ${eyeBlink} 10s ease-in-out infinite;
  }

  & .body {
    animation: ${breathing} 5s ease-in-out infinite;
  }
`

export const ArticleCategoryRss = styled.a`
  margin: var(--72px) var(--48px) var(--24px);
  color: var(--texts);
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;

  svg {
    height: 2rem;
    width: 2rem;
    margin-right: var(--8px);
  }
`
