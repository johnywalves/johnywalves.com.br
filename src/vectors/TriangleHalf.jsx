import React from "react"
import PropTypes from "prop-types"

const TriangleHalf = ({ color, ...rest }) => (
  <svg
    width="350"
    height="350"
    version="1.1"
    viewBox="0 0 350 350"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...rest}
  >
    <defs>
      <linearGradient
        id={`linearGradientTriangle${color.replace("#", "")}`}
        x1="-35.128"
        x2="188.7"
        y1="89.854"
        y2="115.51"
        gradientUnits="userSpaceOnUse"
        spreadMethod="repeat"
      >
        <stop stop-color={color} stop-opacity=".90" offset=".50" />
        <stop stop-color={color} stop-opacity=".60" offset=".50" />
      </linearGradient>
    </defs>
    <g transform="matrix(1.2906 0 0 1.2906 -655.79 1.4945)">
      <path
        transform="rotate(-6.9715 776.57 -4557.9)"
        d="m179.02 194.62-223.61-27.427 135.56-179.94z"
        fill={`url(#linearGradientTriangle${color.replace("#", "")})`}
        fill-rule="evenodd"
      />
    </g>
  </svg>
)

TriangleHalf.propTypes = {
  color: PropTypes.string.isRequired,
}

export default TriangleHalf
