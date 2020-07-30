import React from "react"

import { Text } from "./styled"

const Bagde = ({ children, ...rest }) => <Text {...rest}>{children}</Text>

export default Bagde
