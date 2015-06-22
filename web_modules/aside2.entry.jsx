"use strict";

import OtherPane from "absolvent.pl/React/OtherPane";
import AsideState from "absolvent.pl/Baobab/AsideState";
import React from "react";
import $ from "jquery";

var asideState = AsideState.create({});
var asideStateTree = asideState.data;

function redraw() {
    React.render(<OtherPane
        {...asideStateTree.get()}
        onClose={asideState.actions.onClose}
        updateTitle={asideState.actions.updateTitle}
    ></OtherPane>, document.getElementById(asideState.selector));
}

$("[data-role=\"aside-open-other\"]").on("click", function () {
    asideStateTree.set("isVisible", true);
});

asideStateTree.on("update", redraw);
