var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Recycle = React.createClass({

    render: function() {

        return (
            <div className="about-recycle hidden">
                <div className="recycle-profile copy ">
                    <p className="recycle-wordmark wordmark"></p>
                    <p className="para">
                        This logo was made for recycleIT, a club which takes old computers from campus and repairs them and makes them suitable to donate for charity.
                    </p>
                    <p className="para">
                        The logo's basis is the old Microsoft 98 Recycle Bin icon. The logo was made in Blender, and the font in the typeface is Montserrat.
                    </p>
                </div>
            </div>
        )
    }
});

module.exports = Recycle;

