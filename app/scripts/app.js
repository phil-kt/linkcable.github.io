
var React = require('react'),
    mountNode = document.getElementById("app");

import Landing from './ui/landing.jsx/';
import About from './ui/about.jsx';
import Education from './ui/education.jsx';
import Experience from './ui/experience.jsx';
import Portfolio from './ui/portfolio.jsx';

var App = React.createClass({

  render: function() {
    return (
      <div>
          <Landing />
          <About />
          <Education />
          <Experience />
          <Portfolio />
      </div>
    );
  }
});


React.render(<App className="app"/>, mountNode);

