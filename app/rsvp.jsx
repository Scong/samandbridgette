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
      <div id="RSVP"></div>
    );
  }
});

module.exports = RSVP;
