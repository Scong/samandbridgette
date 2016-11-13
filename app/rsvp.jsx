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
        <div className="information col-md-6">
          <h3>
            March 25th, 2017. ChristiansBurg, VA
          </h3>
          <p>
            <a href="https://www.google.com/maps/dir/37.2934681,-80.0547626/Sinkland+Farms,+3020+Riner+Road,+Christiansburg,+VA+24073/@37.2042333,-80.529429,10z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x884d92c08870c5f3:0x85faf4939c6e6ac!2m2!1d-80.4477!2d37.0933!3e0" target="_blank">
              Sinkland Farms, 3020 Riner Road, Christiansburg, VA 24073
            </a>
          </p>

          <p>
            <a href="http://sinklandfarms.com/" target="_blank">Their Website</a>
          </p>
          <p className="text-muted" style={{fontSize: "2px"}}>
            Shakes fist at embedded code.
          </p>
        </div>
        <div className="col-md-6">
          <h4>Available Rooms</h4>
          <p>
            25 Rooms are blocked at the Days Inn in Christiansburg until March 11th for the 25th - 26th. There are several other hotels in the area as well.
          </p>

          <p>
            (540) 382-0261 Under the name Sam Congleton or Bridgette Michelsen.&nbsp;
            <a href="https://www.wyndhamhotels.com/days-inn/christiansburg-virginia/days-inn-christiansburg/overview?CID=LC:DI:20160927:RIO:Local:SM-disatl" target="_blank">
              Link
            </a>
          </p>
        </div>
        <div id="RSVP"></div>
      </div>
    );
  }
});

module.exports = RSVP;
