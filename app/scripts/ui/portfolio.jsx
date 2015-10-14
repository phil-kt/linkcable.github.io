var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');
var Roam = require('./roam-carousel.jsx');

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
                     <Roam ref="about-roam" />
                      <Carousel decorators={Decorators} framePadding="0px 40px" className="about-stokr hidden" ref="about-stokr" >
                          <div className="stokr-profile copy ">
                          </div>
                      </Carousel>
                  </div>
              </div>
          </div>
        )

    }


});

module.exports = Portfolio;
