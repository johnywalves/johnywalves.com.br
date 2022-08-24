import React from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import PropTypes from "prop-types"

import Menu from "./Menu"
import { Wrapper } from "./styled"

import GeneralStyles from "styles/general"

import "styles/styles.css"

const Blueprint = ({ children, content }) => {
  return (
    <ParallaxProvider>
      <GeneralStyles />
      <Wrapper content={content}>
        <Menu hero={!content} />
        {children}
      </Wrapper>
    </ParallaxProvider>
  )
}

Blueprint.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.bool,
}

Blueprint.defaultTypes = {
  content: false,
}

export { default as Container } from "./Container"
export default Blueprint
