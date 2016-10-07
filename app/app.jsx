var React = require("react");
var Header = require("./header");
var Footer = require("./footer");
var Body = require("./body");

var App = React.createClass({
  render () {
    return (
      <div>
        <Header location={this.props.location}/>
        <Body >
          {this.props.children}
        </Body >
        <Footer />
      </div>
    );
  }
});

module.exports = App;
