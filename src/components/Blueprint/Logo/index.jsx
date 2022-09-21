import React from "react"
import PropTypes from "prop-types"

import { LogoWrapper } from "./styled"

const Logo = ({ whiteLogo }) => (
  <LogoWrapper fade to={"/new/"} duration={0.75}>
    {"{JWA}"}
  </LogoWrapper>
)

Logo.propTypes = {
  whiteLogo: PropTypes.bool,
}

Logo.defaultTypes = {
  whiteLogo: false,
}

export default Logo
