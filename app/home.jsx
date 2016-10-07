var React = require("react");
var landing_picture = require("file?name=landing.jpg!./images/hay.jpg");

var Home = React.createClass({
  render () {

    return (
      <div className="container">
        <h3 className="text-center">
          Bridgette and Sam are getting married!
        </h3>
        <div className="content-container welcome">
          <div className="content-item location">
            <h4>March 25th, 2017. ChristiansBurg, VA</h4>
            <div className="welcome-body">
              <p>
                Welcome to Sam and Bridgettes wedding site.
              </p>
              <p>
                We Love each other, and are getting married.. Pretty cool!
              </p>
              <p className="text-muted" style={{fontSize: "2px"}}>
                Sam checks off sappy stuff on todo list.
              </p>
            </div>
          </div>

          <div className="content-item">
            <img src={landing_picture} alt="Park in Salem" className="hay-picture" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;
