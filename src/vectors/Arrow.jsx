import React from "react"

const Arrow = (props) => (
  <svg
    width="250"
    height="250"
    version="1.1"
    viewBox="0 0 66.146 66.146"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <defs>
      <linearGradient
        id="linearGradient1556"
        x1="9.8954"
        x2="9.9595"
        y1="2.468"
        y2="56.971"
        gradientTransform="translate(2.6458)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--highlight-light)" offset="0" />
        <stop stop-color="var(--third-light)" offset="1" />
      </linearGradient>
      <linearGradient
        id="linearGradient32230"
        x1="9.8954"
        x2="38.82"
        y1="2.468"
        y2="44.89"
        gradientTransform="translate(2.6458)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--highlight-lighter)" offset="0" />
        <stop stop-color="var(--secondary)" offset="1" />
      </linearGradient>
      <linearGradient
        id="linearGradient32964"
        x1="9.9744"
        x2="58.922"
        y1="57.076"
        y2="40.451"
        gradientTransform="translate(2.6458)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--highlight-lightest)" offset="0" />
        <stop stop-color="var(--highlight)" offset="1" />
      </linearGradient>
    </defs>
    <g>
      <path
        d="m12.541 2.468-6.5414 61.67 13.241-14.122z"
        fill="url(#linearGradient1556)"
        fill-rule="evenodd"
      />
      <path
        d="m5.9998 64.138 55.568-23.686-42.357 9.3526z"
        fill="url(#linearGradient32964)"
      />
      <path
        d="m12.541 2.468 6.6697 47.336 42.357-9.3526z"
        fill="url(#linearGradient32230)"
      />
    </g>
  </svg>
)

export default Arrow
