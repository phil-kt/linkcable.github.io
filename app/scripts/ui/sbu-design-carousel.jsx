var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var SBUDesign = React.createClass({

    render: function() {

        return (
            <Carousel decorators={Decorators} framePadding="0px 40px" className="about-sbu-design hidden">
                <div className="sbu-design-profile copy ">
                    <p className="sbu-design-wordmark wordmark"></p>
                    <p className="para">
                        I work for the Department of Computer Science for Stony Brook as a graphic designer. I am responsible for creating banners which appear on their website, as well as creating print flyers and occasionally do whiteboard graffiti at the behest of my boss.
                    </p>
                    <p className="para">
                        My work is to the &rarr;
                    </p>
                </div>
                <div>
                    <img src='./images/portfolio/sbu-design/world-well.png' className="carousel-image"></img>
                </div>
                <div>
                    <img src='./images/portfolio/sbu-design/laurel-riel.png' className="carousel-image"></img>
                </div>
            </Carousel>
        )
    }
});

module.exports = SBUDesign;

