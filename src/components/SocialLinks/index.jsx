import React from "react"
// Content
import Icons from "./icons"
import links from "./content"
// Style
import * as S from "./styled"

const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          const Icon = Icons[link.icon]
          return (
            <S.SocialLinksItem key={i}>
              <S.SocialLinksLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconWrapper>
                  <Icon />
                </S.IconWrapper>
              </S.SocialLinksLink>
            </S.SocialLinksItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}

export default SocialLinks
