// header.js
var React = require("react");
import { Link } from 'react-router'

var NavLink = class {
  constructor(name, route, location) {
    this.name = name;
    this.route = route
    this.location = location
  }

  get element() {
    return (<li className={this.classNames}>
      <Link to={this.route}>{this.name}</Link>
    </li>)
  }

  get classNames(){
    if(this.location === this.route)
      return "active"
  }
}

var Header = React.createClass({
  render () {
    return (
      <div className="header">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to={`/home`}>Sam and Bridgette</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                {this.navLink("RSVP", '/rsvp')}
                {this.navLink("Help Us!", '/sos')}
                <li role="separator" className="divider"></li>
                {this.navLink("Registry", '/registry')}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  },

  navLink(name, route) {
    return new NavLink(name, route, this.props.location.pathname).element
  }
});

module.exports = Header;
