var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Hungerless = React.createClass({

    render: function() {

        return (
            <Carousel decorators={Decorators} framePadding="0px 40px" className="about-hungerless hidden">
                <div className="hungerless-profile copy ">
                    <p className="hungerless-wordmark wordmark"></p>
                    <p className="para">
                        Hungerless is a webapp that was created a HudsonHack 2015. The teme of HudsonHack was to create an application that could benefit NYC and its populace. Our team decided to create an app to help feed the homeless, where people could report their leftovers from a meal and arrange to donate it to a homeless person looking for food who is texted where to meet and what meal to expect.
                    </p>

                    <p className="para">
                        I was responsible for creating the logo and the web application for Hungerless, It was my first time working with React and using modern web scaffolding technologies with Yeoman, so although the website might not be much I learned a lot regarding current web dev from this hack.
                    </p>

                    <p className="para">
                        <a href="https://github.com/tonocm/hudsonhacks">See it on Github <i className="fa fa-github-alt fa-fw"></i></a>
                    </p>
                    <p className="para">
                        <a href="http://devpost.com/software/hungerless">See it on Devpost <span className="devpost"></span></a>
                    </p>
                </div>
                <div>
                    <img src="../../images/portfolio/hungerless/hungerless-1.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="../../images/portfolio/hungerless/hungerless-2.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="../../images/portfolio/hungerless/hungerless-3.png" className="carousel-image"></img>
                </div>
            </Carousel>
        )
    }
});

module.exports = Hungerless;

