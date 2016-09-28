var React = require("react");
var Header = require("./header");
var Footer = require("./footer");
var RSVP = require("./rsvp");
var Body = require("./body");

var Page = React.createClass({
  render () {
    return (
      <div className="container">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
});

module.exports = Page;
