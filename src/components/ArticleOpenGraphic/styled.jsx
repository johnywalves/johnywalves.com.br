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
  padding: 60px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const OpenGraphicHeader = styled.header`
  width: 100%;
`

export const OpenGraphicData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  p {
    margin: 0;
  }
`

export const OpenGraphicCategory = styled.p`
  color: #222;
  background-color: #e0138c;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 4px 16px;
  width: fit-content;
  border-radius: 16px;
  margin-bottom: 16px;
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
  color: #f8f8f8;
  font-size: 4.5rem;
  line-height: 125%;
  margin: 16px 0;
  width: 100%;
  height: calc(4.5rem * 1.25 * 3);
  text-align: left;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  text-overflow: ellipsis;
  overflow: hidden;

  & span {
    color: #e0138c;
  }
`

export const OpenGraphicFooter = styled.footer`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: calc(128px + 32px) 1fr;
`

export const OpenGraphicAvatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-right: 16px;
  border: 2px solid transparent;
  background-color: #f8f8f8;
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
