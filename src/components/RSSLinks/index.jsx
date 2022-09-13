import React from "react"
import { Rss } from "@styled-icons/fluentui-system-filled/Rss"

import links from "./content"
import {
  RSSLinksWrapper,
  RSSLinksList,
  RSSLinksItem,
  IconWrapper,
} from "./styled"

const MenuLinks = () => (
  <RSSLinksWrapper>
    <RSSLinksList>
      {links.map(({ description, url }, index) => (
        <RSSLinksItem key={index}>
          <a href={url} target="_target" rel="noreferrer noopener">
            <IconWrapper>
              <Rss />
            </IconWrapper>
            {description}
          </a>
        </RSSLinksItem>
      ))}
    </RSSLinksList>
  </RSSLinksWrapper>
)

export default MenuLinks
