// header.js
var React = require("react");

var Header = React.createClass({
  render () {
    return (
      <nav className="navbar navbar-default header">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
              </button>
              <a className="navbar-brand" href="#">Sam and Bridgette</a>
            </div>
            <ul className="nav navbar-nav">
                <li><a href="#">RSVP</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
