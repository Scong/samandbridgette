var React = require("react");
var RSVP = require("./rsvp");
var Home = require("./home");
var SOS = require("./sos");
var Contact = require("./contact_us");
var App = require("./app");
var Registry = require("./registry");

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

var Page = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home}/>
          <Route path="RSVP" component={RSVP}/>
          <Route path="sos" component={SOS}/>
          <Route path="contact_us" component={Contact}/>
          <Route path="registry" component={Registry}/>
          <Route path="*" component={Home}/>
        </Route>
      </Router>
    );
  }
});

module.exports = Page;
