
var React = require('react'),
    mountNode = document.getElementById("app");

import Landing from './ui/landing.jsx/';

var App = React.createClass({

  render: function() {
    return (
      <div>
          <Landing />
      </div>
    );
  }
});


React.render(<App className="app"/>, mountNode);

