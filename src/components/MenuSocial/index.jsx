import React from "react"
import PropTypes from "prop-types"
import { Rss } from "@styled-icons/fluentui-system-filled/Rss"

import Strings from "components/strings"
import Icons from "assets/icons"

import {
  MenuSocialWrapper,
  MenuSocialList,
  Item,
  Link,
  IconWrapper,
} from "./styled"

const MenuSocial = ({ vertical, contact }) => {
  return (
    <MenuSocialWrapper vertical={vertical}>
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
      <MenuSocialList vertical={vertical}>
        {Strings.socialLinks.map(({ icon, url, label }) => {
          const Icon = Icons[icon]
          return (
            <Item key={icon} contact={contact}>
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

MenuSocial.defaultProps = {
  vertical: false,
  contact: false,
}

export default MenuSocial
