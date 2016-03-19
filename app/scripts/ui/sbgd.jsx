var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var SBGD = React.createClass({

    render: function() {

        return (
            <div className="about-sbgd hidden">
                <div className="sbgd-profile copy ">
                    <p className="sbgd-wordmark wordmark"></p>
                    <p className="para">
                        I am president of the Stony Brook Game Developers on campus and created a logo for the club in the vein of our school's computing society.
                    </p>
                    <p className="para">
                        The four circles represent the four circles found on any common game controller, with the pixellated font meant to evoke the spirit of a video game.
                    </p>
                </div>
            </div>
        )
    }
});

module.exports = SBGD;

