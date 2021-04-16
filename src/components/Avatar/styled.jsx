import styled from "styled-components"
import media from "styled-media-query"
import { GatsbyImage } from "gatsby-plugin-image"

export const AvatarWrapper = styled(GatsbyImage)`
  border-radius: 50%;
  height: 3.75em;
  width: 3.75em;
  margin: auto;

  ${media.lessThan("large")`
    height: 1.875em;
    width: 1.875em;
  `}
`
