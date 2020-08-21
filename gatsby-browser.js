import "lazysizes"
import React from "react"
import ReactDOM from "react-dom"
import SWUpdater from "./src/components/SWUpdater"

require("prismjs/themes/prism-tomorrow.css")

function onServiceWorkerUpdateReady() {
    const root = document.createElement('div')
    document.body.appendChild(root);
    ReactDOM.render(<SWUpdater></SWUpdater>, root)
}

export { onServiceWorkerUpdateReady }