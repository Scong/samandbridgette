// header.js
var React = require("react");
import { Link } from 'react-router'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { hashHistory } from 'react-router'

var NavLink = class {
  constructor(name, route, location) {
    this.name = name;
    this.route = route
    this.location = location
  }

  pushRoute() {
    return () => {
      hashHistory.push(this.route);
    }
  }

  get element() {
    return (<NavItem onClick={this.pushRoute()}>{this.name}</NavItem>)
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
        <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/home`}>Sam and Bridgette</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            {this.navLink("RSVP", '/rsvp')}
            {this.navLink("Help Us!", '/sos')}
            {this.navLink("Registry", '/registry')}
            {this.navLink("Contact", '/contact_us')}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    );
  },

  navLink(name, route) {
    return new NavLink(name, route, this.props.location.pathname).element
  }
});

module.exports = Header;
