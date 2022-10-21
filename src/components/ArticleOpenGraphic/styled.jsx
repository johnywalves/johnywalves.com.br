import styled from "styled-components"

export const OpenGraphicWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 600px;
  background-color: #222;
`

export const OpenGraphicCover = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.1;
`

export const OpenGraphicContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 90px 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const OpenGraphicHeader = styled.header`
  width: 100%;
`

export const OpenGraphicTime = styled.time`
  color: #f8f8f8;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 0.5rem;
    margin: 0 8px;
  }
`

export const OpenGraphicTitle = styled.h1`
  color: #e0138c;
  font-size: 3rem;
  margin-top: 4px;
  margin-bottom: 16px;
  transform: translateX(-2px);
`

export const OpenGraphicDescription = styled.p`
  color: #f8f8f8;
  font-size: 1.25rem;
`

export const OpenGraphicCategory = styled.p`
  color: #222;
  background-color: #e0138c;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 4px 12px;
  width: fit-content;
  border-radius: 12px;
  margin-bottom: 16px;
`

export const OpenGraphicFooter = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: calc(128px + 16px) 1fr;
`

export const OpenGraphicAvatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-right: 16px;
  border: 4px solid #f8f8f8;
`

export const OpenGraphicFooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const OpenGraphicName = styled.p`
  color: #f8f8f8;
  font-size: 1.75rem;
  font-weight: 600;
`

export const OpenGraphicUrl = styled.p`
  color: #b8b8b8;
  margin: 16px 0;
  font-size: 1.5rem;
`

export const OpenGraphicAuthor = styled.p`
  color: #f8f8f8;
  font-size: 1.25rem;
`
