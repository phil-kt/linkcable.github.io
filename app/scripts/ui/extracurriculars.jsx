var React = require('react');
var ReactDOM = require('react-dom');
var jso, jsoLogo, sbgd, sbgdLogo, sbcs, sbcsLogo;

var Education = React.createClass({

    getInitialState: function () {
        return {
            club: "jso"
        };
    },

    componentDidMount: function() {
        sbu = ReactDOM.findDOMNode(this.refs.sbu);
        sbuLogo = ReactDOM.findDOMNode(this.refs.sbuLogo);
    },

    onClubClick: function(e) {
        if (typeof this.props.onClick !== 'undefined') {
            this.props.onClick(e);
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
            <div className="page extracurriculars">
                <div className="header">
                    Extracurriculars
                </div>

                <div className="logos">
                    <div className="logo logo-passive sbgd" onClick={this.onClubClick} ref="sdgdLogo">
                    </div>

                    <div className="logo logo-active jso" onClick={this.onClubClick} ref="jsoLogo">
                    </div>

                    <div className="logo logo-passive sbcs" onClick={this.onClubClick} ref="sbcsLogo">
                    </div>

                    <div className="logo logo-passive recycle" onClick={this.onClubClick} ref="recycleLogo">
                    </div>
                </div>

                <div className="copy jso" ref="jso">
                    <p className="para">
                        I have been president for Stony Brook's <a href="https://www.facebook.com/sbujso">Japanese Student Organization (JSO)</a> for the past two years. I initially joined after returning from studying abroad in Korea and sought to reconnect with my own heritage. After just 3 months in the club I ended up elected as president.
                    </p>
                    <p className="para">
                        As president of JSO, I organize weekly general body meetings, each with their own unique aspect of Japanese culture, such as origami, calligraphy, or kigo. I also organize large scale events with 100's of people coming out, such as Moon Viewing Night or our Maid Cafe. I also manage extensions of JSO, such as J-Jamu, our club band, and Nippon Dance Corp., our dance team.
                    </p>
                    <p className="para">
                        All in all, JSO is one of the things I'm most proud of in college and it's given me friends, family, and a place to always call home. &hearts;
                    </p>
                </div>
                <div className="hidden-fade" ref="sbcs">
                    <p className="para">
                        I've been a member of the <a href="https://www.facebook.com/groups/sb.computing/">Stony Brook Computing Society (SBCS)</a> for all my four years at college, and have been on the eBoard for two of them. As an organization, we plan weekly general body meetings, as well as tech talks where we have students or professionals come in to teach a technology like git or iOS development. We also organize company tours in the city with the likes of Google, Spotify, Facebook, etc.
                    </p>
                    <p>
                        As for my responsibilities in the eBoard, we all share the same responsibilities, but I am primarily in charge of designing promotional material and taking photographs at our events. As the oldest one on the eBoard I serve as a kind of advisor so the other eBoard members know what has and hasn't worked in the past.
                    </p>
                </div>

                <div className="hidden-fade" ref="sbgd">
                    <p className="para">
                        I am president of the <a href="https://www.facebook.com/groups/sbgamedev/">Stony Brook Game Developers (SBGD)</a> as well, which is Special Interest group (SIG) of SBCS. As you might've guessed by the name, our club is dedicated to the development of video games, whether that be programming, music, art, or business.
                    </p>
                    <p>
                        For SBGD I take the lead in planning our weekly general body meetings, which range from technical introductions to Unity, Blender, HTML5 and other technologies, along with presenting topics such as Game Design, Character Creation, and other not-so-technical aspects of game development that people sometimes don't think about. I also am in charge of MC-ing the annual <a href="http://www3.cs.stonybrook.edu/~games/">Stony Brook Game Programming Competition</a> later this year.
                    </p>
                </div>

            </div>
        );
    }
});

module.exports = Education;
