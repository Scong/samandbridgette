// index.js
var React = require("react");
var ReactDOM = require("react-dom");
var Page = require("./page");


var ReactContainer = document.createElement("div");
ReactContainer.setAttribute("id", "react-container");
document.body.appendChild(ReactContainer)

ReactDOM.render(<Page />, ReactContainer);
