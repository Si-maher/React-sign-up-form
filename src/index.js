import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./RegisterServiceWorker"
ReactDom.render(<App />, document.getElementById("root"))
registerServiceWorker()