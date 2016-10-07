var css = require("!style!css!sass!./assets/main.scss")
var React = require("react");
var ReactDOM = require("react-dom");
var Page = require("./page");
window.Globals = require("./globals");

var ReactContainer = document.createElement("div");
ReactContainer.setAttribute("id", "react-container");
document.body.appendChild(ReactContainer)

ReactDOM.render(<Page />, ReactContainer);
