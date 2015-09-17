var React = require('react');
var sbu, sbuLogo, efrei, efreiLogo, uos, uosLogo;

var Education = React.createClass({

    getInitialState: function () {
        return {
            school: "sbu"
        };
    },

    componentDidMount: function() {
        sbu = React.findDOMNode(this.refs.sbu);
        sbuLogo = React.findDOMNode(this.refs.sbuLogo);

        efrei = React.findDOMNode(this.refs.efrei);
        efreiLogo = React.findDOMNode(this.refs.efreiLogo);

        uos = React.findDOMNode(this.refs.uos);
        uosLogo = React.findDOMNode(this.refs.uosLogo);
    },

    onSchoolClick: function(e) {
        if (typeof this.props.onClick !== 'undefined') {
            this.props.onClick(e);
        }

        if(e.target.className.includes("sbu") === true) {
            sbu.className = "copy sbu";
            efrei.className = "copy hidden";
            uos.className = "copy hidden";
            sbuLogo.className = "school school-active sbu";
            uosLogo.className = "school school-passive uos";
            efreiLogo.className = "school school-passive efrei";
        }

        else if(e.target.className.includes("efrei") === true) {
            sbu.className = "copy hidden";
            efrei.className = "copy efrei";
            uos.className = "copy hidden";
            efreiLogo.className = "school school-active efrei";
            sbuLogo.className = "school school-passive sbu";
            uosLogo.className = "school school-passive uos";
        }

        else if(e.target.className.includes("uos") === true) {
            sbu.className = "copy hidden";
            efrei.className = "copy hidden";
            uos.className = "copy uos";
            uosLogo.className = "school school-active uos";
            efreiLogo.className = "school school-passive efrei";
            sbuLogo.className = "school school-passive sbu";
        }
    },

    render: function() {

        return (
            <div className="education">
                <div className="header">
                    Education
                </div>
                <div className="schools">
                    <div className="school school-passive efrei" onClick={this.onSchoolClick} ref="efreiLogo">
                    </div>
                    <div className = "plane-container">
                        <i className="fa fa-plane plane fa-rotate-225 left-plane" ref="leftPlane"></i>
                    </div>
                    <div className="school school-active sbu" onClick={this.onSchoolClick} ref="sbuLogo">
                    </div>
                    <div className = "plane-container">
                        <i className="fa fa-plane plane fa-rotate-45 right-plane" ref="rightPlane"></i>
                    </div>
                    <div className="school school-passive uos" onClick={this.onSchoolClick} ref="uosLogo">
                    </div>
                </div>
                <div className="hidden" ref="efrei">
                    <div className="para">
                        EFREI was my first study abroad experience in Paris of Summer 2013. It only lasted a month,
                        but while I was there I took classes on Business Management, Software Design, and basic French.
                        (Je ne parle pas bien français)
                    </div>
                    <br />
                    <div className="para">
                        Of course, being in Paris I visited all the sights I could in the month I was there. The Eiffel
                        Tower, L'Arc de Triomphe, the McDonald's with the white "M", I saw it all. My personal favorite site,
                        however, was going up north to see the Grand Bé near Saint-Malo. The view of the changing tide
                        is just breathtaking.
                    </div>
                </div>

                <div className="copy sbu" ref="sbu">
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
                <div className="hidden" ref="uos">
                    <div className="para">
                        I studied at the University of Seoul of Korea in Fall of 2013, my sophomore year. I decided to
                        study abroad in Korea because I has visited China and Japan prior, and thought it was time for
                        me to visit the last "big" Asian nation. I was also pretty obsessed with K-pop at the time.
                    </div>
                    <br />
                    <div className="para">
                        Whilst I was there I studied Korean language, culture, and nightlife. I visited several UNESCO
                        sites, made friends with expats, travelled to Taipei and Tokyo, saw SNSD, T-Ara, and 9 Muses live,
                        and made life-lasting friends
                        across the globe.
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Education;
