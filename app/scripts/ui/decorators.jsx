import React from 'react';

const Decorators = [
    {
        component: React.createClass({
            render() {
                return (
                    <i  className="fa fa-chevron-left"
                        style={this.getButtonStyles(this.props.currentSlide === 0)}
                        onClick={this.props.previousSlide}></i>
                )
            },
            getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'none',
                    color: 'white',
                    margin: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                }
            }
        }),
        position: 'CenterLeft'
    },
    {
        component: React.createClass({
            render() {
                return (
                    <i className="fa fa-chevron-right"
                        style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
                        onClick={this.props.nextSlide}></i>
                )
            },
            getButtonStyles(disabled) {
                return {
                    border: 0,
                    background: 'none',
                    color: 'white',
                    marginRight: 10,
                    outline: 0,
                    opacity: disabled ? 0.3 : 1,
                    cursor: 'pointer'
                }
            }
        }),
        position: 'CenterRight'
    },
    {
        component: React.createClass({
            render() {
                var self = this;
                var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
                return (
                    <ul style={self.getListStyles()}>
                        {
                            indexes.map(function(index) {
                                return (
                                    <li style={self.getListItemStyles()} key={index}>
                                        <button
                                            style={self.getButtonStyles(self.props.currentSlide === index)}
                                            onClick={self.props.goToSlide.bind(null, index)}>
                                            &bull;
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            },
            getIndexes(count, inc) {
                var arr = [];
                for (var i = 0; i < count; i += inc) {
                    arr.push(i);
                }
                return arr;
            },
            getListStyles() {
                return {
                    position: 'relative',
                    margin: 0,
                    top: -10,
                    padding: 0
                }
            },
            getListItemStyles() {
                return {
                    listStyleType: 'none',
                    display: 'inline-block'
                }
            },
            getButtonStyles(active) {
                return {
                    border: 0,
                    background: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                    padding: 10,
                    outline: 0,
                    fontSize: 24,
                    opacity: active ? 1 : 0.5
                }
            }
        }),
        position: 'BottomCenter'
    }
];



export default Decorators;
