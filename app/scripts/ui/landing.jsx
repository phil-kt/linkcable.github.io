var React = require('react');

var Landing = React.createClass({
    render: function() {
        return (
            <div className="landing">
                <div className="intro">
                    <div className="header">What's up?</div>
                    <div className="details">I'm Phil</div>
                    <div className="details">&</div>
                    <div className="details">I'm a</div>
                    <div className="anim-container">
                        <div className="rotating-words">
                            <span>designer</span>
                            <span>programmer</span>
                            <span>collector</span>
                            <span>Pokemon Trainer</span>
                            <span>Anime addict</span>
                            <span>日本人</span>
                        </div>
                    </div>

                    <div className="footer">
                        scroll down for more <i className="fa fa-hand-o-down"></i> <br />
                        <a href="./files/philippe_kimura-thollander_resume.pdf">(want the abridged version? <i className="fa fa-file-text-o"></i>)</a>
                    </div>

                </div>
                <div className="heads-up">
                    Heads up! I'm doing a major redesign of my website so some stuff might be outdated! (this is still using React v0.13 haha) Sorry for the inconvenience, and look forward to the new site. I promise it'll be A E S T H E T I C. <br/> -Posted (9/6/16)
                </div>
            </div>
        );
    }
});

module.exports = Landing;
