var React = require('react');

var Contact = React.createClass({

    render: function() {
        return (
            <div className="page contact">
                <div className="header">
                    Get in Touch
                </div>
                <div className="copy">
                    <p className="para">
                       Wow, you read all the way down to here! (Or just clicked the nav button, I don't judge.) Well if you read through some of my site or looked through my portfolio and liked what you saw feel free to get in touch with me through any of the following:
                    </p>
                    <p className="para links">
                        <a href="mailto:philippekimurathollander@gmail.com"><i className="fa fa-envelope fa-fw"></i></a>
                        <a href="http://www.twitter.com/Link_Cable"><i className="fa fa-twitter fa-fw"></i></a>
                        <a href="http://www.linkedin.com/in/linkcable"><i className="fa fa-linkedin fa-fw"></i></a>
                        <a href="http://www.instagram.com/link_cable"><i className="fa fa-instagram fa-fw"></i></a>
                        <a href="http://www.github.com/linkcable"><i className="fa fa-github fa-fw"></i></a>
                        <a href="http://www.last.fm/user/LinkCable"><i className="fa fa-lastfm fa-fw"></i></a>
                        <a href="https://dmg04.wordpress.com/"><i className="fa fa-wordpress fa-fw"></i></a>
                        <a href="#"><i className="fa fa-dribbble fa-fw"></i></a>
                    </p>

                </div>
            </div>
        );
    }
});

module.exports = Contact;
