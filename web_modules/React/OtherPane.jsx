"use strict";

import React from "react";
import shouldUpdate from "omniscient/shouldupdate";

export default React.createClass({
    "render": function () {
        return <div>
            Jadę furka do poznania a na drodze stoi Ania
            <a data-role="in-pane-aside">In pane aside</a>
        </div>;
    },
    "shouldComponentUpdate": shouldUpdate
});
