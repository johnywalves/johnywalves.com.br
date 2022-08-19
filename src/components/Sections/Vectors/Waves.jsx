import React from "react"

const Waves = (props) => (
  <svg
    width="220"
    height="219"
    version="1.1"
    viewBox="0 0 58.208 57.944"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient
        id="linearGradient5567"
        x1="1.0583"
        x2="41.96"
        y1="20.992"
        y2="19.663"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--highlight)" offset="0" />
        <stop stop-color="var(--highlight)" stop-opacity="0" offset="1" />
      </linearGradient>
      <linearGradient
        id="linearGradient5575"
        x1="53.141"
        x2="91.448"
        y1="37.837"
        y2="36.687"
        gradientTransform="translate(-33.867)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--secondary)" stop-opacity="0" offset="0" />
        <stop stop-color="var(--secondary)" offset="1" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="5.2917"
    >
      <path
        d="m3.7051 21c0.16849 19.111 20.955 17.235 33.409 17.198s33.018 2.181 32.924-17.198c-0.095363-19.588-20.542-17.161-32.924-17.198-12.525-0.037405-33.577-1.9132-33.409 17.198z"
        stroke="url(#linearGradient5567)"
        style={{ paintOrder: "stroke markers fill" }}
      />
      <path
        d="m-11.398 36.695c0.16849 19.111 20.955 17.235 33.409 17.198 12.453-0.03719 33.018 2.181 32.924-17.198-0.09536-19.588-20.542-17.161-32.924-17.198-12.525-0.037404-33.577-1.9132-33.409 17.198z"
        stroke="url(#linearGradient5575)"
        style={{ paintOrder: "stroke markers fill" }}
      />
    </g>
  </svg>
)

export default Waves
