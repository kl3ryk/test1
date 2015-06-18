"use strict";

import Aside from "absolvent.pl/React/Aside";
import React from "react";
import shouldUpdate from "omniscient/shouldupdate";

export default React.createClass({
    "propTypes": {
        "isVisible": React.PropTypes.bool.isRequired
    },
    "render": function () {
        return <Aside title="title 321 123 test" isVisible={this.props.isVisible}>
            <div>
                test test test
                <div>teest</div>
                <ul>
                    <li>1 asd</li>
                    <li>2 asd</li>
                    <li>4 asd</li>
                    <li>3 asd</li>
                </ul>
            </div>
        </Aside>;
    },
    "shouldComponentUpdate": shouldUpdate
});
