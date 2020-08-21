import "lazysizes"
import React from "react"
import ReactDOM from "react-dom"
import SWUpdater from "./src/components/SWUpdater"

require("prismjs/themes/prism-tomorrow.css")

if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]', {
        speed: 200,
        offset: 66
    })
}

function onServiceWorkerUpdateReady() {
    const root = document.createElement('div')
    document.body.appendChild(root);
    ReactDOM.render(<SWUpdater></SWUpdater>, root)
}

export { onServiceWorkerUpdateReady }