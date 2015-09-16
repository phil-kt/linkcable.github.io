var React = require('react');

var Education = React.createClass({

    getInitialState: function() {
        return{school: "sbu"};
    },

    onSchoolClick: function() {

    },

    render: function() {

        return (
            <div className="education">
                <div className="header">
                    Education
                </div>
                <div className="schools">
                    <div className="school efrei">
                    </div>
                    <div className = "plane-container">
                        <i className="fa fa-plane plane fa-rotate-225 left-plane" ref="leftPlane"></i>
                    </div>
                    <div className="school sbu">
                    </div>
                    <div className = "plane-container">
                        <i className="fa fa-plane plane fa-rotate-45 right-plane" ref="rightPlane"></i>
                    </div>
                    <div className="school uos">
                    </div>
                </div>
                <div className="copy sbu">
                    <div className="para">
                        I'm currently attending Stony Brook University on Long Island, majoring in Computer
                        Science with minors in History (Asian concentration) and Digital Arts. I'm also a University
                        Scholar with a 3.80/4.00 GPA and in the Honors program for CS, which requires a greater than
                        3.5 GPA across all CS courses.
                    </div>
                    <br />
                    <div className="para">
                        Classes I've taken during my time here include Analysis of Algorithms with Steven Skiena,
                        Human-Computer Interaction, Operating Systems, Computer Architecture, Multimedia (Intro &
                        Advanced). I'm currently taking Networks, Databases, and Software Engineering.
                    </div>
                </div>
                <div className="copy uos hidden" ref = "uos">
                    <div className="para">
                        I studied at the University of Seoul of Korea in Fall of 2013, my sophomore year. I decided to
                        study abroad in Korea because I has visited China and Japan prior, and thought it was time for
                        me to visit the last "big" Asian nation. I was also obsessed with K-pop at the time.
                    </div>
                    <br />
                    <div className="para">

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Education;
