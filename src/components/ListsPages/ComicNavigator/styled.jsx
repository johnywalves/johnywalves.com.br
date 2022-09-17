import styled, { keyframes } from "styled-components"

export const ArticleComicNavigatiorWrapper = styled.nav`
  width: 100%;
  margin: var(--24px) 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ArticleCategoryNavigatiorCover = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  margin: 0 0 var(--16px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--shadow-colors);
  border-radius: 50%;
  box-shadow: 0 0 4px var(--shadowColors), 4px 4px 8px var(--shadowColors);
  overflow: hidden;
  background: linear-gradient(var(--highlight-semi) -50%, var(--white) 150%);

  svg {
    transform: scale(-1, 1) translateY(20%);
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
