var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('nuka-carousel');
var Decorators = require('./decorators.jsx');
var Roam = require('./roam-carousel.jsx');
var Stokr = require('./stokr-carousel.jsx');
var Rendezvous = require('./rendezvous-carousel.jsx');
var Hungerless = require('./hungerless-carousel.jsx');
var Simpaired = require('./simpaired-carousel.jsx');
var SBUDesign = require('./sbu-design-carousel.jsx');
var SBGD = require('./sbgd.jsx');
var Recycle = require('./recycle.jsx');
var Cable = require('./cable.jsx');

var grid, content;
var last, lastCopy, copy;
var roam, stokr, sbu, hungerless, recycle, simpaired, rendezvous, sbgd, cable;
var roamLogo, stokrLogo, sbuLogo, hungerlessLogo, sbgdLogo, recycleLogo, simpairedLogo, rendezvousLogo, cableLogo;

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

        hungerless = ReactDOM.findDOMNode(this.refs.hungerless);
        hungerlessLogo = ReactDOM.findDOMNode(this.refs.hungerlessLogo);

        simpaired  = ReactDOM.findDOMNode(this.refs.simpaired);
        simpairedLogo = ReactDOM.findDOMNode(this.refs.simpairedLogo);

        sbu = ReactDOM.findDOMNode(this.refs.sbuDesign);
        sbuLogo = ReactDOM.findDOMNode(this.refs.sbuDesignLogo);

        sbgd = ReactDOM.findDOMNode(this.refs.sbgd);
        sbgdLogo = ReactDOM.findDOMNode(this.refs.sbgdLogo);

        recycle = ReactDOM.findDOMNode(this.refs.recycle);
        recycleLogo = ReactDOM.findDOMNode(this.refs.recycleLogo);

        cable = ReactDOM.findDOMNode(this.refs.cable);
        cableLogo = ReactDOM.findDOMNode(this.refs.cableLogo);

        copy = $('.portfolio');

    },

    onLogoClick: function(e) {

        this.setState({portfolioVisible: true});

        var oldHeight = copy.height();

        if(e.target.className.includes("roam")){
            this.hideEverything(last, lastCopy, roamLogo, roam, "roam");
        }

        if(e.target.className.includes("stokr")){
            this.hideEverything(last, lastCopy, stokrLogo, stokr, "stokr");
        }

        if(e.target.className.includes("rendezvous")){
            this.hideEverything(last, lastCopy, rendezvousLogo, rendezvous, "rendezvous");
        }

        if(e.target.className.includes("hungerless")){
            this.hideEverything(last, lastCopy, hungerlessLogo, hungerless, "hungerless");
        }


        if(e.target.className.includes("simpaired")){
            this.hideEverything(last, lastCopy, simpairedLogo, simpaired, "simpaired");
        }

        if(e.target.className.includes("sbu-design")){
            this.hideEverything(last, lastCopy, sbuLogo, sbu, "sbu-design");
        }

        if(e.target.className.includes("sbgd")){
            this.hideEverything(last, lastCopy, sbgdLogo, sbgd, "sbgd");
        }

        if(e.target.className.includes("recycle")){
            this.hideEverything(last, lastCopy, recycleLogo, recycle, "recycle");
        }

        if(e.target.className.includes("cable")){
            this.hideEverything(last, lastCopy, cableLogo, cable, "cable");
        }

        //console.log(copy.height());
        //console.log(oldHeight);
        var newHeight = copy.height();
        copy.height(oldHeight);
        copy.animate({height: newHeight}, 'slow', function() {
            copy.height("auto");
        });
        //console.log(copy.height());
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
              <h1 className="header">
                Portfolio
              </h1>

              <div className={this.state.portfolioVisible ? 'grid hidden' : 'grid'} ref="grid">
                  <div className="logos">
                      <div className="logo logo-passive roam" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive sbu-design" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive stokr" onClick={this.onLogoClick}>
                      </div>
                  </div>
                  <div className="logos">

                      <div className="logo logo-passive rendezvous" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive hungerless" onClick={this.onLogoClick}>
                      </div>
                      <div className="logo logo-passive simpaired" onClick={this.onLogoClick}>
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
                      <div className="logo logo-passive hungerless" onClick={this.onLogoClick} ref="hungerlessLogo">
                      </div>
                      <div className="logo logo-passive simpaired" onClick={this.onLogoClick} ref="simpairedLogo">
                      </div>
                      <div className="logo logo-passive sbu-design" onClick={this.onLogoClick} ref="sbuDesignLogo">
                      </div>
                      <div className="logo logo-passive sbgd" onClick={this.onLogoClick} ref="sbgdLogo">
                      </div>
                      <div className="logo logo-passive recycle" onClick={this.onLogoClick} ref="recycleLogo">
                      </div>
                      <div className="logo logo-passive cable" onClick={this.onLogoClick} ref="cableLogo">
                      </div>
                  </div>
                  <div className="about-project">
                      <Roam ref="roam" />
                      <Stokr ref="stokr" />
                      <Rendezvous ref="rendezvous" />
                      <Hungerless  ref="hungerless" />
                      <Simpaired ref="simpaired" />
                      <SBUDesign ref="sbuDesign" />
                      <SBGD ref="sbgd" />
                      <Recycle ref="recycle" />
                      <Cable ref="cable" />
                  </div>
              </div>

          </div>
        )

    }


});

module.exports = Portfolio;
