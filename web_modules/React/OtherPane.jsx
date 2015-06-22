"use strict";

import Aside from "absolvent.pl/React/Aside";
import React from "react";
import shouldUpdate from "omniscient/shouldupdate";

export default React.createClass({
    "propTypes": {
        "onClose": React.PropTypes.func.isRequired,
        "updateTitle": React.PropTypes.func.isRequired,
        "isVisible": React.PropTypes.bool.isRequired,
        "title": React.PropTypes.string.isRequired
    },
    "getTitle": function () {
        return this.props.title || "Other Pane";
    },
    "render": function () {
        return <Aside isVisible={this.props.isVisible} onClose={this.props.onClose} title={this.getTitle()}>
            <div>
                Jadę furka do poznania a na drodze stoi Ania
            </div>
        </Aside>;
    },
    "shouldComponentUpdate": shouldUpdate
});
