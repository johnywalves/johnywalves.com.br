import styled from "styled-components"

export const NotificationWrapper = styled.div`
  position: fixed;
  width: 320px;
  right: calc(50vw - 320px / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  border: 1px solid var(--borders);
  border-radius: 2px;
  color: var(--texts);
  background-color: var(--mediumBackground);
  cursor: pointer;
  transition: all 0.2s ease-out;
  animation: moveUp 0.5s ease-in-out both;

  @keyframes moveUp {
    0% {
      bottom: -100vh;
    }
    100% {
      bottom: 60px;
    }
  }

  &:hover {
    color: var(--highlight);
    transform: translateY(-3px);
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`
