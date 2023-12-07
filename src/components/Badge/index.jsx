import React from "react"

import { Text } from "./styled"

const Badge = ({ children, ...rest }) => <Text {...rest}>{children}</Text>

export default Badge
