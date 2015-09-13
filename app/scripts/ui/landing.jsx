var React = require('react')

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
                            <span>coder</span>
                            <span>gamer</span>
                            <span>Pokemon Trainer</span>
                            <span>Anime addict</span>
                            <span>日本人</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Landing;
