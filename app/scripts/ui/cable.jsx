var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Cable = React.createClass({

    render: function() {

        return (
            <div className="about-cable hidden">
                <div className="cable-profile copy ">
                    <p className="cable-wordmark wordmark"></p>
                    <p className="para">
                       This is a personal logo I made, based off of Nintendo's link cable product for the Game Boy and Game Boy Advance.
                    </p>
                    <p className="para">
                        Link Cable has been my personal online moniker for many years, and it is inspired by the times I spent playing video games with my friends at school using a link cable and making life long friendships. :)
                    </p>
                </div>
            </div>
        )
    }
});

module.exports = Cable;

