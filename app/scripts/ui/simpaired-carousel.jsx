var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var Simpaired = React.createClass({

    render: function() {

        return (
            <Carousel decorators={Decorators} framePadding="0px 40px" className="about-simpaired hidden">
                <div className="simpaired-profile copy ">
                    <p className="simpaired-wordmark wordmark"></p>
                    <p className="para">
                        Simpaired is a class project designed to simulate the effects of drunk driving in a Unity game. The player is given a first person perspective and drives down a road as their BAC gradually increases and they must avoid other vehicles on the road. As their BAC increases the reaction speed of the player decreases to simulate being drunk.
                    </p>

                    <p className="para">
                        I 3D modelled the assets used in Simpaired, as well as the code for the game. This project was pretty much completed in one all-nighter in true college fashion. Most of the night consisted of learning how to code C# in Unity's Monodevelop with my partner, as well as deciding what song to play for in the credits. <a href="https://www.youtube.com/watch?v=penvn9VL32Y">(We went with Modest Mouse)</a>
                    </p>

                    <p className="para">
                        <a href="https://github.com/LinkCable/simpaired_unity">See it on Github <i className="fa fa-github-alt fa-fw"></i></a>
                    </p>
                </div>
                <div>
                    <img src="./images/portfolio/simpaired/simpaired-1.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="./images/portfolio/simpaired/simpaired-2.png" className="carousel-image"></img>
                </div>
                <div>
                    <img src="./images/portfolio/simpaired/simpaired-3.png" className="carousel-image"></img>
                </div>
            </Carousel>
        )
    }
});

module.exports = Simpaired;

