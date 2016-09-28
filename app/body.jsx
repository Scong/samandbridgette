var React = require("react");
var RSVP = require("./rsvp");

var Body = React.createClass({
  render () {
    return (
      <div className="container">
        <RSVP />
      </div>
    );
  }
});

module.exports = Body;
