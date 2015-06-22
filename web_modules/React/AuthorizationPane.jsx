"use strict";

import React from "react";
import shouldUpdate from "omniscient/shouldupdate";

export default React.createClass({
    "render": function () {
        return <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis vestibulum massa, et finibus augue egestas ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at elementum eros, ut varius arcu. Cras nec iaculis erat. Aenean ac massa lacinia, pharetra nunc sit amet, venenatis justo. In accumsan egestas cursus. Curabitur et sem convallis, pulvinar elit sed, ornare dui. Morbi ac porta nibh. Vivamus suscipit blandit tortor et congue. Nulla ac viverra arcu. Sed tristique luctus magna, vitae interdum erat pharetra tincidunt. Pellentesque bibendum nunc vitae mi vulputate, nec ultricies leo pellentesque. Fusce accumsan dolor quam, ac malesuada nibh luctus et. Etiam finibus placerat egestas.</p>
            <div>teest</div>
            <ul>
                <li>1 asd</li>
                <li>2 asd</li>
                <li>4 asd</li>
                <li>3 asd</li>
            </ul>
        </div>;
    },
    "shouldComponentUpdate": shouldUpdate
});
