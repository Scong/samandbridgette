var React = require("react");

var Contact = React.createClass({
  render () {

    return (
      <div className="container">
        <h3 className="text-center">
          Contact Information for Bridgette and Sam
        </h3>
        <div className="content-container">
          <ul className="content-item">
            <lh>Contact Us for help or concerns!</lh>
            <li>
              <ul>
                <lh>Email</lh>
                <li> Sam: STCongleton@gmail.com </li>
                <li> Bridgette: BCMichelsen@yahoo.com </li>
              </ul>
            </li>
            <li>
              <ul>
                <lh>Phone Numbers</lh>
                <li> Sam: 571-314-4272 </li>
                <li> Bridgette: 703-795-0166 </li>
              </ul>
            </li>
            <li>
              Address: 608 Front Ave, Salem VA, 24153
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Contact;
