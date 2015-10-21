
var React = require('react'),
    mountNode = document.getElementById("app");

import Landing from './ui/landing.jsx/';
import About from './ui/about.jsx';
import Education from './ui/education.jsx';
import Experience from './ui/experience.jsx';
import Portfolio from './ui/portfolio.jsx';
import Extracurriculars from './ui/extracurriculars.jsx';
import Contact from './ui/contact.jsx';

var App = React.createClass({

  render: function() {
    return (
      <div className="app">
          <Landing />
          <About />
          <Education />
          <Experience />
          <Portfolio />
          <Extracurriculars />
          <Contact />
          <div className="footer">
              <p>
                  Website made using <a href="https://github.com/randylien/generator-react-gulp-browserify">react-gulp-browserify</a> with help from <a href="https://github.com/kenwheeler/nuka-carousel">nuka carousel</a>.
              </p>
              <p>
                  <a href="https://github.com/LinkCable/linkcable.github.io/tree/react-rewrite">View this site on github.</a>
              </p>
          </div>
      </div>
    );
  }
});


React.render(<App className="app"/>, mountNode);

