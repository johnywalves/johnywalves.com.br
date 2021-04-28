import React from "react"
// Content
import Icons from "./icons"
import links from "./content"
// Style
import * as S from "./styled"

const SocialLinks = ({ about = false }) => {
  return (
    <S.SocialLinksWrapper about={about}>
      <S.SocialLinksList className={about ? "about" : ""}>
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
