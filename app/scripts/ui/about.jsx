var React = require('react');

var About = React.createClass({

    render: function() {
        return (
          <div className="page about">
              <div className="header">
                  About Me
              </div>
              <div className="copy">
                  <div className="para">
                      Hey, as you might have already guessed, my name's Phil. Philippe Kimura-
                      Thollander to be exact. I'm an aspiring designer/programmer/nerd currently
                      in his last year of study at Stony Brook University.
                  </div>
                  <br />
                  <div className="para">
                      If you're on this site, I'm guessing you either:
                      <ul>
                          <li><i className="fa fa-male fa-fw"></i> are me</li>
                          <li><i className="fa fa-file-text-o fa-fw"></i> found it on my resume or</li>
                          <li><i className="fa fa-search fa-fw"></i> discovered it upon a Google search (neato!)</li>
                      </ul>
                  </div>
                  <br />
                  <div className="para">
                      This site will tell you all you'd really need to know about me, but here are some quick fun
                      facts:
                      <ul>
                          <li><i className="fa fa-globe fa-fw"></i> I'm half-Swede, half-Japanese.</li>
                          <li><i className="fa fa-code fa-fw"></i> I've never won a Hackathon. </li>
                          <li><i className="fa fa-yen fa-fw"></i> I'm a big fan of vaporwave. </li>
                      </ul>
                  </div>
              </div>
          </div>
        );
    }
});

module.exports = About;
