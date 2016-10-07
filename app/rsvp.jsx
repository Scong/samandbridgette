var React = require("react");

var loadJS = function(url, implementationCode, location){
  document.write = function () {
    document.getElementById('RSVP').innerHTML = [].concat.apply([], arguments).join('');
  };
  var scriptTag = document.createElement('script');
  scriptTag.src = url;

  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;

  location.appendChild(scriptTag);
};

var RSVP = React.createClass({
  embedRSVP(){
    var embed = function () {
      loadJS('http://app.rsvpify.com/embed/78313', resizeableIFrame, document.getElementById("RSVP"));
    }

    var resizeableIFrame = function () {
      iFrameResize({autoResize: true, heightCalculationMethod: 'max',enablePublicMethods: true}, "#RSVPifyIFrame");
    }

    loadJS('http://app.rsvpify.com/js/iframeResizer.min.js', embed, document.getElementById("RSVP"));
  },

  componentDidMount(){
    this.embedRSVP()
  },

  render () {
    return (
      <div className="rsvp">
        <div className="information">
          <h3>
            March 25th, 2017. ChristiansBurg, VA
          </h3>
          <p>
            <a href="https://www.google.com/maps/dir/37.2934681,-80.0547626/Sinkland+Farms,+3020+Riner+Road,+Christiansburg,+VA+24073/@37.2042333,-80.529429,10z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x884d92c08870c5f3:0x85faf4939c6e6ac!2m2!1d-80.4477!2d37.0933!3e0" target="_blank">
              Sinkland Farms, 3020 Riner Road, Christiansburg, VA 24073
            </a>
          </p>

          <p>
            <a href="" target="_blank">Their Website</a>
          </p>
          <p className="text-muted" style={{fontSize: "2px"}}>
            Shakes fist at embedded code.
          </p>
        </div>
        <div id="RSVP"></div>
      </div>
    );
  }
});

module.exports = RSVP;
