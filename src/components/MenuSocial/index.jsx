import React from "react"
import PropTypes from "prop-types"

import Strings from "components/strings"
import Icons, { Rss } from "assets/icons"

import {
  MenuSocialWrapper,
  MenuSocialList,
  Item,
  Link,
  IconWrapper,
} from "./styled"

const MenuSocial = ({ vertical = false, contact = false }) => {
  return (
    <MenuSocialWrapper $vertical={vertical ? 1 : 0}>
      {!vertical && !contact && (
        <MenuSocialList>
          <Item>
            <Link
              href={Strings.blog.feed}
              title={Strings.blog.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Rss /> <p>{Strings.blog.title}</p>
              </IconWrapper>
            </Link>
          </Item>
          <Item>
            <Link
              href={Strings.comics.feed}
              title={Strings.comics.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Rss /> <p>{Strings.comics.title}</p>
              </IconWrapper>
            </Link>
          </Item>
        </MenuSocialList>
      )}
      <MenuSocialList $vertical={vertical ? 1 : 0}>
        {Strings.navigation.social.map(({ icon, url, platform }) => {
          const Icon = Icons[icon]
          return (
            <Item key={icon} $contact={contact ? 1 : 0}>
              <Link
                href={url}
                title={platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
              </Link>
            </Item>
          )
        })}
      </MenuSocialList>
    </MenuSocialWrapper>
  )
}

MenuSocial.propTypes = {
  vertical: PropTypes.bool,
  contact: PropTypes.bool,
}

export default MenuSocial
