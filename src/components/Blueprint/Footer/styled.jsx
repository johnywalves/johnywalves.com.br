import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const FooterWrapper = styled.footer`
  color: var(--background);
  background: url("/vectors/lowpoly-shadow.svg");
  background-color: var(--highlight);

  padding: var(--padding-content);
  padding-bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & a,
  & a:hover,
  & a:visited {
    color: var(--white);
  }

  & nav {
    width: 320px;

    svg {
      color: var(--white);
    }
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

export const FooterDescription = styled.p`
  color: var(--white);
  padding: var(--16px) 0;
  font-size: 0.9rem;

  strong {
    font-size: 1rem;
  }
`

export const FooterImageCover = styled(GatsbyImage)`
  object-fit: contain;
  margin: 0 0 -120px 0;
  transform: translateY(-120px);
`
