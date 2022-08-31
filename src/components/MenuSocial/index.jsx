import React from "react"
import PropTypes from "prop-types"

import Strings from "components/strings"

import Icons from "./icons"
import {
  MenuSocialWrapper,
  MenuSocialList,
  Item,
  Link,
  IconWrapper,
} from "./styled"

const MenuSocial = ({ vertical }) => {
  return (
    <MenuSocialWrapper vertical={vertical}>
      <MenuSocialList vertical={vertical}>
        {Strings.socialLinks.map(({ icon, url, label }) => {
          const Icon = Icons[icon]
          return (
            <Item key={icon}>
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
  vertical: PropTypes.bool.isRequired,
}

MenuSocial.defaultProps = {
  vertical: false,
}

export default MenuSocial
