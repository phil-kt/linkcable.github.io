var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');
var Roam = require('./roam-carousel.jsx');
var Stokr = require('./stokr-carousel.jsx');
var Rendezvous = require('./rendezvous-carousel.jsx');

var grid, content;
var last, lastCopy;
var roam, stokr, sbu, hungerless, recycle, simpaired, rendezvous, sbgd, cable;
var roamLogo, stokrLogo, sbuLogo, hungerlessLogo, recycleLogo, simpairedLogo, rendezvousLogo, cableLogo;

var Portfolio = React.createClass({

    getInitialState: function(){
        return {portfolioVisible: false};
    },

    componentDidMount: function(){

        roam = ReactDOM.findDOMNode(this.refs.roam);
        roamLogo = ReactDOM.findDOMNode(this.refs.roamLogo);

        stokr = ReactDOM.findDOMNode(this.refs.stokr);
        stokrLogo = ReactDOM.findDOMNode(this.refs.stokrLogo);

        rendezvous = ReactDOM.findDOMNode(this.refs.rendezvous);
        rendezvousLogo = ReactDOM.findDOMNode(this.refs.rendezvousLogo);
    },

    onLogoClick: function(e) {

        this.setState({portfolioVisible: true});

        if(e.target.className.includes("roam")){
            this.hideEverything(last, lastCopy, roamLogo, roam, "roam");
        }

        if(e.target.className.includes("stokr")){
            this.hideEverything(last, lastCopy, stokrLogo, stokr, "stokr");
        }

        if(e.target.className.includes("rendezvous")){
            this.hideEverything(last, lastCopy, rendezvousLogo, rendezvous, "rendezvous");
        }


    },

    hideEverything: function(previous, previousCopy, clicked, clickedCopy, clickedString) {

        if(previous !== undefined) {
            var previousString = previous.className.replace("logo logo-active", "");
            previous.className = "logo logo-passive" + previousString;
            previousCopy.className = previousCopy.className.replace('fade-in', 'hidden');
        }

        clicked.className = "logo logo-active " + clickedString;
        clickedCopy.className = clickedCopy.className.replace('hidden', 'fade-in');


        last = clicked;
        lastCopy = clickedCopy;
    },

    render: function() {

        return (
          <div className="page portfolio">
              <div className="header">
                Portfolio
              </div>
              <div className={this.state.portfolioVisible ? 'grid hidden' : 'grid'} ref="grid">
                  <div className="logos">
                      <div className="logo logo-passive roam" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive sbuport" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive stokr" onClick={this.onLogoClick}>
                      </div>
                  </div>
                  <div className="logos">

                      <div className="logo logo-passive rendezvous" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive hunger" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive sim" onClick={this.onLogoClick}>
                      </div>
                  </div>

                  <div className="logos">
                      <div className="logo logo-passive sbgd" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive recycle" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive cable" onClick={this.onLogoClick}>
                      </div>
                  </div>
              </div>


              <div className={this.state.portfolioVisible ? 'content fade-in' : 'content hidden'} ref="content">
                  <div className="logos">
                      <div className="logo logo-passive roam" onClick={this.onLogoClick} ref="roamLogo">
                      </div>
                      <div className="logo logo-passive stokr" onClick={this.onLogoClick} ref="stokrLogo">
                      </div>
                      <div className="logo logo-passive rendezvous" onClick={this.onLogoClick} ref="rendezvousLogo">
                      </div>
                      <div className="logo logo-passive hunger" onClick={this.onLogoClick} ref="hungerLogo">
                      </div>
                      <div className="logo logo-passive sim" onClick={this.onLogoClick} ref="simLogo">
                      </div>
                      <div className="logo logo-passive sbuport" onClick={this.onLogoClick} ref="sbuportLogo">
                      </div>
                      <div className="logo logo-passive sbgd" onClick={this.onLogoClick} ref="sbgdLogo">
                      </div>
                      <div className="logo logo-passive recycle" onClick={this.onLogoClick} ref="recycleLogo">
                      </div>
                      <div className="logo logo-passive cable" onClick={this.onLogoClick} ref="cableLogo">
                      </div>
                  </div>
                  <div className="about-project">
                      <Roam ref="about-roam" ref="roam" />
                      <Stokr ref="about-stokr" ref="stokr" />
                      <Rendezvous ref="about-rendezvous" ref="rendezvous" />
                  </div>
              </div>
          </div>
        )

    }


});

module.exports = Portfolio;
