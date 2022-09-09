import React from "react"

import { LogoWrapper } from "./styled"

const Logo = () => {
  return (
    <LogoWrapper fade to={"/new/"} duration={0.75}>
      {"{JWA}"}
    </LogoWrapper>
  )
}

export default Logo
