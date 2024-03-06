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
              href={Strings.posts.feed}
              title={Strings.posts.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWrapper>
                <Rss /> <p>{Strings.posts.title}</p>
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
        {Strings.socialLinks.map(({ icon, url, label }) => {
          const Icon = Icons[icon]
          return (
            <Item key={icon} $contact={contact ? 1 : 0}>
              <Link
                href={url}
                title={label}
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
