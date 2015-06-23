"use strict";

import AuthorizationPane from "absolvent.pl/React/AuthorizationPane";
import OtherPane from "absolvent.pl/React/OtherPane";
import React from "react";
import classNames from "classnames";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default React.createClass({
    "onCloseClick": function (evt) {
        evt.preventDefault();

        this.props.onClose();
    },
    "propTypes": {
        "onClose": React.PropTypes.func.isRequired,
        "updateTitle": React.PropTypes.func.isRequired,
        "isVisible": React.PropTypes.bool.isRequired,
        "title": React.PropTypes.string.isRequired
    },
    "renderContent": function () {
        return <div className="content" key="content">
            <h4>{this.props.title}</h4>
            <a className="close" onClick={this.onCloseClick}>X</a>
            <div>
                {(() => {
                    switch (this.props.type) {
                        case 1:
                            return <AuthorizationPane
                                {...this.props}
                                updateTitle={this.props.updateTitle} />;
                        case 2:
                            return <OtherPane
                                {...this.props}
                                updateTitle={this.props.updateTitle} />;
                    }
                })()}
            </div>
        </div>;
    },
    "render": function () {
        return <ReactCSSTransitionGroup className={classNames({
            "aside": true
        })} component="div" transitionName="aside-content" transitionAppear={true}>
            {this.props.isVisible && this.renderContent()}
            {this.props.isVisible && <div className="overlay" key="overlay" onClick={this.onCloseClick} />}
        </ReactCSSTransitionGroup>;
    }
});
