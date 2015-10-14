var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');

var grid, content;

var Portfolio = React.createClass({

    getInitialState: function(){
        return {portfolioVisible: false};
    },

    componentDidMount: function(){
    },

    onLogoClick: function(e) {

        this.setState({portfolioVisible: true});

        //grid = React.findDOMNode(this.refs.grid);
        //content = React.findDOMNode(this.refs.content);

        //grid.className="hidden-fade";

        //content.className="content fade-in";

    },

    render: function() {

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
          <div className="page portfolio">
              <div className="header">
                Portfolio
              </div>
              <div className={this.state.portfolioVisible ? 'hidden' : 'grid'} ref="grid">
                  <div className="logos">
                      <div className="logo logo-passive roam" onClick={this.onLogoClick} ref="roamLogo">
                      </div>
                      <div className="logo logo-passive sbuport" onClick={this.onLogoClick} ref="sbuportLogo">
                      </div>
                      <div className="logo logo-passive stokr" onClick={this.onLogoClick} ref="stokrLogo">
                      </div>
                  </div>
                  <div className="logos">

                      <div className="logo logo-passive ren" onClick={this.onLogoClick} ref="renLogo">
                      </div>
                      <div className="logo logo-passive hunger" onClick={this.onLogoClick} ref="renLogo">
                      </div>
                      <div className="logo logo-passive sim" onClick={this.onLogoClick} ref="simLogo">
                      </div>
                  </div>

                  <div className="logos">
                      <div className="logo logo-passive sbgd" onClick={this.onLogoClick} ref="sbgdLogo">
                      </div>
                      <div className="logo logo-passive recycle" onClick={this.onLogoClick} ref="recycleLogo">
                      </div>
                      <div className="logo logo-passive cable" onClick={this.onLogoClick} ref="cableLogo">
                      </div>
                  </div>
              </div>


              <div className={this.state.portfolioVisible ? 'content fade-in' : 'content hidden'} ref="content">
                  <div className="logos">
                      <div className="logo logo-passive roam">
                      </div>
                      <div className="logo logo-passive stokr">
                      </div>
                      <div className="logo logo-passive ren">
                      </div>
                      <div className="logo logo-passive sim">
                      </div>
                      <div className="logo logo-passive sbuport">
                      </div>
                      <div className="logo logo-passive sbgd">
                      </div>
                      <div className="logo logo-passive recycle">
                      </div>
                      <div className="logo logo-passive cable">
                      </div>
                  </div>
                  <div className="about-project">
                      <Carousel decorators={Decorators} framePadding="0px 40px" className="about-roam" ref="about-roam" >
                          <div className="roam-profile copy ">
                              <div className="roam-wordmark"></div>
                              <p className="para">
                              Roam was a project developed at HackNY with 3 other friends. We came in with the idea of making an app where you could get Google Maps directions without having mobile data. We've all encountered times when you have no data, or you run out of your monthly plan, but still need to know how to get somewhere. I myself ran into this situation when I was camping with friends over the summer.
                              </p>
                              <p className="para">
                              I was responsible for the UI/UX/front-end aspect of the app. Now, being made in 24 hours and it being my first attempt at making an Android app as well as implementing my Material Design. I wasn't able to get material animations like I wanted, but thankfully the technical aspect of the app was impressive enough to impress the judges and net us first place.
                              </p>
                              <p className="para"> See it on Github <i className="fa fa-github-alt fa-fw"></i></p>
                          </div>
                          <div>
                              <h1>hi</h1>
                          </div>
                          <div>
                              <h2> hello </h2>
                          </div>
                      </Carousel>
                  </div>
              </div>
          </div>
        )

    }


});

module.exports = Portfolio;
