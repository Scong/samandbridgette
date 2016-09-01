var React = require("react");
var Header = require("./header");
var Footer = require("./footer");
var RSVP = require("./rsvp");

var Page = React.createClass({
  render () {
    return (
      <div>
        <Header />
        <RSVP />
        <Footer />
      </div>
    );
  }
});

module.exports = Page;
