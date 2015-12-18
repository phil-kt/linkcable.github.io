var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Rendezvous = React.createClass({

    render: function() {

        return (
            <Carousel decorators={Decorators} framePadding="0px 40px" className="about-rendezvous hidden">
                <div className="rendezvous-profile copy ">
                    <p className="rendezvous-wordmark wordmark"></p>
                    <p className="para">
                        Rendezvous is an iPhone app made at PennApps XII inspired by our team's difficulty of meeting up once we got to the huge convention center it was hosted at. This struggle inspired us to create an app that would let us easily find one another, even without using data! We accomplished this feat by utilizing Apple's iBeacon technology, which is an improved version of Bluetooth as it let us transfer more data.
                    </p>

                    <p className="para">
                        For Rendezvous, I was responsible for wireframing and programming the front-end of the app, as well as creating a logo and the UI. I also had to pick Sp uwift in the 36 hours we had, but thankfully Apple made it pretty easy to code up different screens and animate between them in XCode. Although we didn't end up winning anything, it was a fun project and very rewarding.
                    </p>

                    <p className="para">
                        <a href="https://github.com/LinkCable/rendezvous">See it on Github <i className="fa fa-github-alt fa-fw"></i></a>
                    </p>
                    <p className="para">
                        <a href="http://devpost.com/software/rendezvous-fsu7xd">See it on Devpost <span className="devpost"></span></a>
                    </p>
                </div>
                <div>
                    <img src="./images/portfolio/rendezvous/rendezvous-1.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="./images/portfolio/rendezvous/rendezvous-2.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="./images/portfolio/rendezvous/rendezvous-3.png" className="carousel-image"></img>
                </div>
            </Carousel>
        )
    }
});

module.exports = Rendezvous;

