var React = require('react');

var Education = React.createClass({

    render: function() {
        return (
            <div className="education">
                <div className="header">
                    Education
                </div>
                <div className="schools">
                    <div className="school efrei">
                    </div>
                    <i className="fa fa-plane plane fa-rotate-225"></i>
                    <div className="school sbu">
                    </div>
                    <i className="fa fa-plane plane fa-rotate-45"></i>
                    <div className="school uos">
                    </div>
                </div>
                <div className="copy">
                    <div className="para">
                        I'm currently attending Stony Brook University on Long Island, majoring in Computer
                        Science with minors in History (Asian concentration) and Digital Arts. I'm also a University
                        Scholar with a 3.80/4.00 GPA and in the Honors program for CS, which requires a greater than
                        3.5 GPA across all CS courses.
                    </div>
                    <br />

                    <div className="para">
                        Other than studying in the States, I've also gone abroad to Paris and Korea to study at the
                        Ecole d'ingénieur généraliste Informatique & technologies du numérique and the University of Seoul
                        respectively. Whilst I was there I learned a lot about both French and Korean culture, picked up
                        some of the language, and learned about the nightlife. ;)
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Education;
