var React = require("react");
import { Link } from 'react-router'

var Footer = React.createClass({
  render () {
    return (
      <footer className="footer">
        <div className="content-container footer-container text-muted">
          <div className="content-item">
            <Link to="contact_us">Contact Us</Link>
          </div>
          <div className="content-item">
            <a href="https://www.google.com/maps/dir/37.2934681,-80.0547626/Sinkland+Farms,+3020+Riner+Road,+Christiansburg,+VA+24073/@37.2042333,-80.529429,10z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x884d92c08870c5f3:0x85faf4939c6e6ac!2m2!1d-80.4477!2d37.0933!3e0" target="_blank">
              Sinkland Farms, 3020 Riner Road, Christiansburg, VA 24073
            </a>
          </div>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
