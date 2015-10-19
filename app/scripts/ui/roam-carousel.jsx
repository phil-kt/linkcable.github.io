var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Roam = React.createClass({

    render: function() {

        return (
            <Carousel decorators={Decorators} framePadding="0px 40px" className="about-roam hidden">
                <div className="roam-profile copy ">
                    <div className="roam-wordmark wordmark"></div>
                    <p className="para">
                        Roam is a project developed at HackNY with 3 other friends. We came in with the idea of making
                        an app where you could get Google Maps directions without having mobile data. We've all
                        encountered times when you have no data, or you run out of your monthly plan, but still need to
                        know how to get somewhere. I myself ran into this situation when I was camping with friends over
                        the summer.
                    </p>

                    <p className="para">
                        I was responsible for the UI/UX/front-end aspect of the app. Now, being made in 24 hours and it
                        being my first attempt at making an Android app as well as implementing my Material Design. I
                        wasn't able to get material animations like I wanted, but thankfully the technical aspect of the
                        app was impressive enough to impress the judges and net us first place.
                    </p>

                    <p className="para">
                        <a href="https://github.com/sayalvarun/Roam">See it on Github <i className="fa fa-github-alt fa-fw"></i></a>
                    </p>
                    <p className="para">
                        <a href="http://devpost.com/software/roam-yno5mc">See it on Devpost <span className="devpost"></span></a>
                    </p>
                </div>
                <div>
                    <img src="../../images/portfolio/roam/roam-1.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="../../images/portfolio/roam/roam-2.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="../../images/portfolio/roam/roam-3.png" className="carousel-image"></img>
                </div>
            </Carousel>
        )
    }
});

module.exports = Roam;

