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
          <p className="text-center muted notification">
            Site is under construction but functional -Sam
          </p>
          {this.props.children}
        </Body >
        <Footer />
      </div>
    );
  }
});

module.exports = App;
