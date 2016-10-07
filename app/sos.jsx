var React = require("react");
var landing_picture = require("file?name=landing.jpg!./images/hay.jpg");

var SOS = React.createClass({
  render () {
    return (
      <div className="container">
        <h3 className="text-center">
          SOS!
        </h3>
        <div className="content-container welcome">
          <div className="content-item location">
            <h4>{"We need help, but haven't done anything on this page yet"}</h4>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SOS;
