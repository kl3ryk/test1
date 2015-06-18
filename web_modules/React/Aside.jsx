"use strict";

import React from "react";
// import shouldUpdate from "omniscient/shouldupdate";
import classNames from "classnames";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default React.createClass({
    "asideClose": function () {
        this.setState({
            "isVisible": !this.state.isVisible
        });
    },
    "setTitle": function (title) {
        this.state.title = title;
    },
    "getAsideClassNames": function () {
        return classNames({
            "aside": true
        });
    },
    "getInitialState": function () {
        return {
            "isVisible": true,
            "title": ""
        };
    },
    "render": function () {
        if (this.state.isVisible) {
            return <div className={this.getAsideClassNames()}>
                <ReactCSSTransitionGroup className="content" component="div" transitionName="aside-content">
                    <h4>{this.state.title}</h4>
                    <a className="close" onClick={this.asideClose}>X</a>
                    <div>
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
                <div className="overlay" onClick={this.asideClose}></div>
            </div>;
        }

        return null;
    }
    // "shouldComponentUpdate": shouldUpdate
});
