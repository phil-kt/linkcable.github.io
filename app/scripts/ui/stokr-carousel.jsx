var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Stokr = React.createClass({

    render: function() {

        return (
            <Carousel decorators={Decorators} framePadding="0px 40px" className="about-stokr">
                <div className="stokr-profile copy ">
                    <div className="stokr-wordmark"></div>
                    <p className="para">
                        Stokr is a project I developed at Hack the North with two UWaterloo students. We were all Mac owners and were frustrated how many times we were unable to play games on our Macbooks since many games don't support OSX. So we decided to take things into our own hands and create a Mac App that would let us do so by logging us into Steam using a VPN onto an Amazon EC2 instance and then using Steam's in-house streaming service to stream the game to our Macs.
                    </p>

                    <p className="para">
                        I was responsible for creating the webapp and branding for stokr. The name comes from "stoker", as in the person who shovels coal on a steam engine. The logo itself is meant to evoke the image of steam coming out of a locomotive.
                    </p>

                    <p className="para">
                        <a href="https://github.com/LinkCable/stokr">See it on Github <i className="fa fa-github-alt fa-fw"></i></a>
                        <a href="http://devpost.com/software/stokr">See it on Devpost <span className="devpost"></span></a>
                    </p>
                </div>
                <div>
                    <h1>hi</h1>
                </div>
                <div>
                    <h2> hello </h2>
                </div>
            </Carousel>
        )
    }
});

module.exports = Stokr;

