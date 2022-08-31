import React from "react"

import { LogoWrapper } from "./styled"

const Logo = () => {
  return (
    <LogoWrapper
      to={"/new/"}
      bg="var(--background)"
      direction="left"
      duration={0.6}
      cover
    >
      {"{JWA}"}
    </LogoWrapper>
  )
}

export default Logo
