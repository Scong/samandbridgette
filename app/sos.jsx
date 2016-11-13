var React = require("react");
var landing_picture = require("file?name=landing.jpg!./images/hay.jpg");

var SOS = React.createClass({
  render () {
    return (
      <div className="container">
        <h3 className="text-center">
          Help Us!
        </h3>
        <div className="row">
          <div className="col-md-6">
            <h4>Pre Wedding</h4>

            <ul>
              <li>
                Physical copies of family photos! You can send them to us at 608 Front Ave, Salem VA, 24153.
              </li>
            </ul>
            <ul>
              <li>
                Decorations, please contact for more information.
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h4>Day Of Wedding</h4>
            <p>We need some help on the day of the wedding</p>

            <ul>
              <lh>
                Roles
              </lh>
              <li>
                <strike>Music/DJ Person!</strike>&nbsp;
                <strong>{"Sam's Aunt Lydia is providing DJ equipment / we will have an Ipod playlist"}</strong>
              </li>
              <li>
                Parking Lot Attendant!
              </li>
              <li>
                Photographer: We need someone to take 'official photos' of the ceremony and event in general.
              </li>
            </ul>

            <ul>
              <lh>Everyone!</lh>
              <li>
                Photos: Take great photos, and send them to us! Email: bcmichelsen@yahoo.com or physical copies(preferred).
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SOS;
