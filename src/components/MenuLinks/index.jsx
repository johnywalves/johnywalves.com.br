import React from "react"

import Strings from "components/strings"

import * as S from "./styled"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {Strings.links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenuLinksLink
            cover
            direction="left"
            bg="var(--background)"
            duration={0.6}
            to={link.url}
            activeClassName="active"
          >
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks
