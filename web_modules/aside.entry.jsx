"use strict";

import Aside from "absolvent.pl/React/Aside";
import AsideState from "absolvent.pl/Baobab/AsideState";
import React from "react";
import $ from "jquery";

// var offerSearchConfig = JSON.parse(document.getElementById("OfferSearchConfig").textContent);

var asideState = AsideState.create({});
var asideStateTree = asideState.data;

function redraw() {
    React.render(<Aside
        {...asideStateTree.get()}
        onClose={asideState.actions.onClose}
        updateTitle={asideState.actions.updateTitle} />, document.getElementById(asideState.selector));
}

$("[data-role=\"aside-open-auth\"]").on("click", function () {
    asideStateTree.set("type", 1);
    asideStateTree.set("isVisible", true);
});


$("[data-role=\"aside-open-other\"]").on("click", function () {
    asideStateTree.set("type", 2);
    asideStateTree.set("isVisible", true);
});

$("[data-role=\"update-title\"]").on("click", function () {
    asideState.actions.updateTitle("test wytrzymałości");
});

$("body").on("click", "[data-role=\"in-pane-aside\"]", function () {
    asideStateTree.set("type", 1);
    asideStateTree.set("isVisible", true);
});

asideStateTree.on("update", redraw);
