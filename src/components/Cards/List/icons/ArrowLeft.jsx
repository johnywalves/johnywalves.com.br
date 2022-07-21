import React from "react"
import PropTypes from "prop-types"

const ArrowLeft = ({ rotate }) => (
  <svg
    version="1.1"
    viewBox="0 0 256 512"
    xmlns="http://www.w3.org/2000/svg"
    style={rotate ? { transform: "rotate(180deg)" } : {}}
  >
    <path
      d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
      fill="currentColor"
    />
  </svg>
)

ArrowLeft.propTypes = {
  rotate: PropTypes.bool,
}

ArrowLeft.defaultsTypes = {
  rotate: false,
}

export default ArrowLeft
