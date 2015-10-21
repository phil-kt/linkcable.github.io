var React = require('react');


var hbo, hboLogo, stech, stechLogo, sbugd, sbugdLogo, hrank, hrankLogo, last, lastCopy, copy;

var Experience = React.createClass({

    getInitialState: function() {
        return {
            school: "sbu"
        };
    },

    componentDidMount: function() {
        hbo = React.findDOMNode(this.refs.hbo);
        hboLogo = React.findDOMNode(this.refs.hboLogo);

        stech = React.findDOMNode(this.refs.stech);
        stechLogo = React.findDOMNode(this.refs.stechLogo);

        sbugd = React.findDOMNode(this.refs.sbugd);
        sbugdLogo = React.findDOMNode(this.refs.sbugdLogo);

        hrank = React.findDOMNode(this.refs.hrank);
        hrankLogo = React.findDOMNode(this.refs.hrankLogo);

        last = React.findDOMNode(this.refs.hboLogo);
        lastCopy = React.findDOMNode(this.refs.hbo);

        copy = $('.experience');

    },

    onWorkClick: function(e) {

        var oldHeight = copy.height();

        if (typeof this.props.onClick !== 'undefined') {
            this.props.onClick(e);
        }

        if(e.target.className.includes("hbo") === true){
            this.hideEverything(last, lastCopy, hboLogo, hbo, "hbo");
        }

        if(e.target.className.includes("sbugd") === true){
            this.hideEverything(last, lastCopy, sbugdLogo, sbugd, "sbugd");
        }

        if(e.target.className.includes("hrank") === true){
            this.hideEverything(last, lastCopy, hrankLogo, hrank, "hrank");
        }

        if(e.target.className.includes("stech") === true){
            this.hideEverything(last, lastCopy, stechLogo, stech, "stech");
        }

        var newHeight = copy.height();
        copy.height(oldHeight);
        copy.animate({height: newHeight}, 'fast', function() {
            copy.height('auto');
        });

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
            <div className="page experience">
                <h1 className="header">
                    Experience
                </h1>

                <div className="logos">

                    <div className="logo logo-active hbo" onClick={this.onWorkClick} ref="hboLogo">
                    </div>
                    <div className="logo logo-passive stech" onClick={this.onWorkClick} ref="stechLogo">
                    </div>
                    <div className="logo logo-passive sbugd" onClick={this.onWorkClick} ref="sbugdLogo">
                    </div>
                    <div className="logo logo-passive hrank" onClick={this.onWorkClick} ref="hrankLogo">
                    </div>

                </div>

                <div className="copy hbo" ref="hbo">
                    <p className="para">
                        Over the past summer I had the opportunity to work in the Digital Products division of HBO.
                        During my time there I worked on an internal content management system which handled the banner
                        images displayed on HBOGo and HBONow. Most of my day to day involved front-end development with React.js. I also designed the main search function of the site from
                        UX to UI to the actual implementation.
                    </p>
                    <p className="para">
                        During my time at HBO I also led the design group of Project HBO, an assignment given to the entire class of interns. As the design lead, I took charge in creating mockups and wireframes for potential features for HBO Now, as well as designing all slides of the presentation to "look and feel" like HBO Now. I also presented in front of 100+ HBO employees including SVPs and VPs of different
                        company divisions.
                    </p>
                </div>

                <div className="hidden-fade" ref="sbugd">
                    <p className="para">
                        Currently I serve as graphic designer for the <a href="https://www.cs.stonybrook.edu/">Department of Computer Science at Stony Brook</a>.
                        I am responsible for designing posters, web banners, print handouts, and the occasional white
                        board graffiti.
                    </p>
                    <p className="para">
                        You can see some of my designs down under my portfolio and on their site.
                    </p>
                </div>

                <div className="hidden-fade" ref="stech">
                    <p className="para">
                        I worked at <a href="http://www.summertech.net">SummerTech Computer Camps</a> for several years between high school and my early years
                        of college. SummerTech is a coding camp dedicated to teaching children ages 8 to 16 code, animation,
                        film, and 3D Modeling. It's where I first started learning code as a kid and then I became a counselor.
                    </p>
                    <p className="para">
                        When I worked at SummerTech, I first taught C++, then Java, then introduced Python into the coding
                        curriculum. After teaching code I moved on teaching 3D modeling. During my time there I taught
                        amazing students, from 10 year olds who coded up recursion in a day and a
                        teenager who built a 3D model of Gypsy Danger from Pacific Rim.
                    </p>
                </div>

                <div className="hidden-fade" ref="hrank">
                    <p className="para">
                        I am currently a campus ambassador for <a href="http://www.hackerrank.com">Hackerrank</a>,
                        a website which allows you to practice your coding
                        skill and also test your mettle in competitions against programmers all over the world.
                    </p>
                    <p className="para">
                        As a campus ambassador, my duties involve advertising Hackerranks programming challenges to students
                        on campus, as well as organizing events for their competitions so that students can get together,
                        hack and enjoy some Hackerrank swag.
                    </p>
                </div>

            </div>
        );
    }
});

module.exports = Experience;
