"use strict";

import React from "react";
import classNames from "classnames";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default React.createClass({
    "getAsideClassNames": function () {
        return classNames({
            "aside": true
        });
    },
    "onCloseClick": function (evt) {
        evt.preventDefault();

        this.props.onClose();
    },
    "propTypes": {
        "onClose": React.PropTypes.func.isRequired,
        "isVisible": React.PropTypes.bool.isRequired,
        "title": React.PropTypes.string.isRequired
    },
    "render": function () {
        if (this.props.isVisible) {
            return <ReactCSSTransitionGroup className={this.getAsideClassNames()} component="div" transitionName="aside-content" transitionAppear={true}>
                <div className="content" key="content">
                    <h4>{this.props.title}</h4>
                    <a className="close" onClick={this.onCloseClick}>X</a>
                    <div>
                        {this.props.children}
                    </div>
                </div>
                <div className="overlay" key="overlay" onClick={this.onCloseClick}></div>
            </ReactCSSTransitionGroup>;
        }

        return null;
    }
});
