var React = require('react');
var ReactDOM = require('react-dom');
var gt, gtLogo, sbu, sbuLogo, efrei, efreiLogo, uos, uosLogo, last, lastCopy;

var Education = React.createClass({

    getInitialState: function () {
        return {
            school: "gt"
        };
    },

    componentDidMount: function() {
        sbu = ReactDOM.findDOMNode(this.refs.sbu);
        sbuLogo = ReactDOM.findDOMNode(this.refs.sbuLogo);

        efrei = ReactDOM.findDOMNode(this.refs.efrei);
        efreiLogo = ReactDOM.findDOMNode(this.refs.efreiLogo);

        uos = ReactDOM.findDOMNode(this.refs.uos);
        uosLogo = ReactDOM.findDOMNode(this.refs.uosLogo);

        gt = ReactDOM.findDOMNode(this.refs.gt);
        gtLogo = ReactDOM.findDOMNode(this.refs.gtLogo);

        last = ReactDOM.findDOMNode(this.refs.gtLogo);
        lastCopy = ReactDOM.findDOMNode(this.refs.gt);
    },

    onSchoolClick: function(e) {
        if (typeof this.props.onClick !== 'undefined') {
            this.props.onClick(e);
        }

        if(e.target.className.includes("gt") === true){
            this.hideEverything(last, lastCopy, gtLogo, gt, "gt");
        }

        if(e.target.className.includes("sbu") === true){
            this.hideEverything(last, lastCopy, sbuLogo, sbu, "sbu");
        }

        if(e.target.className.includes("uos") === true){
            this.hideEverything(last, lastCopy, uosLogo, uos, "uos");
        }

        if(e.target.className.includes("efrei") === true){
            this.hideEverything(last, lastCopy, efreiLogo, efrei, "efrei");
        }

    },

    hideEverything: function(previous, previousCopy, clicked, clickedCopy, clickedString) {

        var previousString = previous.className.replace("logo logo-active", "");
        previous.className="logo logo-passive" + previousString;
        previousCopy.className="hidden-fade";

        clicked.className = "logo logo-active " + clickedString;
        clickedCopy.className = "copy " + clickedString;


        last = clicked;
        lastCopy = clickedCopy;
    },

    render: function() {

        return (
            <div className="page education">
                <h1 className="header">
                    Education
                </h1>
                <div className="logos">
                    <div className="logo logo-active gt" onClick={this.onSchoolClick} ref="gtLogo">
                    </div>
                    <div className="logo logo-passive efrei" onClick={this.onSchoolClick} ref="efreiLogo">
                    </div>
                    <div className="logo logo-passive sbu" onClick={this.onSchoolClick} ref="sbuLogo">
                    </div>
                    <div className="logo logo-passive uos" onClick={this.onSchoolClick} ref="uosLogo">
                    </div>
                </div>
                <div className="hidden-fade" ref="efrei">
                    <p className="para">
                        EFREI was my first study abroad experience in Paris of Summer 2013. It only lasted a month,
                        but while I was there I took classes on Business Management, Software Design, and basic French.
                        (Je ne parle pas bien français)
                    </p>
                    <p className="para">
                        Of course, being in Paris I visited all the sights I could in the month I was there. The Eiffel
                        Tower, L'Arc de Triomphe, the McDonald's with the white "M", I saw it all. My personal favorite site,
                        however, was going up north to see the Grand Bé near Saint-Malo. The view of the changing tide
                        is just breathtaking.
                    </p>
                </div>

                <div className="copy gt" ref="gt">
                    <p className="para">
                        I am currently in a first year MS-HCI student at Georgia Tech. HCI stands for Human-Computer Interaction, which basically means I'll be learning all about UX research and UI development for the next two years. Every day I'm taking classes to help me become a better designer. :)
                    </p>
                </div>

                <div className="hidden-fade" ref="sbu">
                    <p className="para">
                        I'm just wrapped up my undergrad at Stony Brook University on Long Island, majoring in Computer
                        Science with minors in History (Asian concentration) and Digital Arts. I'm also a University
                        Scholar with a 3.80/4.00 GPA and in the Honors program for CS, which requires a greater than
                        3.5 GPA across all CS courses.
                    </p>
                    <p className="para">
                        Classes I took during my time there include Analysis of Algorithms,
                        Human-Computer Interaction, Operating Systems, Computer Architecture, Multimedia (Intro &
                        Advanced), Networks, Databases, and Software Engineering.
                    </p>
                </div>

                <div className="hidden-fade" ref="uos">
                    <p className="para">
                        I studied at the University of Seoul of Korea in Fall of 2013, my sophomore year. I decided to
                        study abroad in Korea because I has visited China and Japan prior, and thought it was time for
                        me to visit the last "big" Asian nation. I was also pretty obsessed with K-pop at the time.
                    </p>
                    <p className="para">
                        Whilst I was there I studied Korean language, culture, and nightlife. I visited several UNESCO
                        sites, made friends with expats, travelled to Taipei and Tokyo, saw SNSD, T-Ara, and 9Muses live,
                        and made life-lasting friends
                        across the globe.
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = Education;
