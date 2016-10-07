var React = require("react");
var RSVP = require("./rsvp");

var Body = React.createClass({
  render () {
    return (
      <div className="container body">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Body;
