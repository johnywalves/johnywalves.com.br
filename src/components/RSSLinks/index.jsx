import React from "react"
import { RssSquare } from "@styled-icons/fa-solid/RssSquare"

import links from "./content"
import * as S from "./styled"

const MenuLinks = () => (
  <S.RSSLinksWrapper>
    <S.RSSLinksList>
      {links.map(({ description, url }, index) => (
        <S.RSSLinksItem key={index}>
          <a href={url} target="_target" rel="noreferrer noopener">
            <S.IconWrapper>
              <RssSquare />
            </S.IconWrapper>
            {description}
          </a>
        </S.RSSLinksItem>
      ))}
    </S.RSSLinksList>
  </S.RSSLinksWrapper>
)

export default MenuLinks
