import React from "react"

import { SeparatorListWrapper } from "./styled"

const SeparatorList = ({ children }) => (
  <SeparatorListWrapper>
    <hr />
    {children}
    <hr />
  </SeparatorListWrapper>
)

export default SeparatorList
