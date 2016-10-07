var React = require("react");
var target = require("file?name=target_vector.jpg!./images/target_vector.png");
var cratebarrel = require("file?name=cratebarrel.jpg!./images/cratebarrel.jpg");

var Registry = React.createClass({
  render () {
    return (
      <div className="registry">
        <h3>
          {"Sam and Bridgette's wedding registries"}
        </h3>
        <p>
          Word about the registries
        </p>

        <div className="content-container">
          <div className="content-item">
            <div className="content-container">
              <a href="http://www.target.com/gift-registry/giftgiver?registryId=eQMiFVOa780N7NC72nw_cA" className="content-item" target="_blank">
                <img src={target} alt="target registry" className="target-picture" />
              </a>
            </div>
          </div>
          <div className="content-item">
            <div className="content-container">
              <a href="http://www.crateandbarrel.com/gift-registry/bridgette-michelsen-and-sam-congleton/r5541773" className="content-item" target="_blank">
                <img src={cratebarrel} alt="cratebarrel registry" className="cratebarrel-picture" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Registry;
