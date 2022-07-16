import React from "react"
import PropTypes from "prop-types"

import Strings from "components/strings"

import Icons from "./icons"
import {
  Wrapper,
  List,
  Item,
  Link,
  IconWrapper
} from "./styled"

const SocialLinks = ({ about, vertical }) => {
  const classWrapper = (about ? "about" : "") + (vertical ? "vertical" : "")

  return (
    <Wrapper className={classWrapper} >
      <List>
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
      </List>
    </Wrapper>
  )
}

SocialLinks.propTypes = {
  about: PropTypes.bool.isRequired,
  vertical: PropTypes.bool.isRequired,
}

SocialLinks.defaultProps = {
  about: false,
  vertical: false
}

export default SocialLinks
