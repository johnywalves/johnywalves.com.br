import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const FooterWrapper = styled.footer`
  color: var(--background);
  background-color: var(--highlight);
  padding: 0 var(--24px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & a,
  & a:hover,
  & a:visited {
    color: var(--white);
    margin-right: var(--36px);
  }

  & nav {
    width: 320px;

    svg {
      color: var(--background);
    }
  }
`

export const FooterContent = styled.div`
  padding: var(--24px) 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const FooterDescription = styled.p`
  padding: var(--16px) 0;
`

export const FooterImageCover = styled(GatsbyImage)`
  object-fit: contain;
  margin: 0 0 -132px 0;
  transform: translateY(-132px);
`
