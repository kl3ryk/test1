"use strict";

import AuthorizationPane from "absolvent.pl/React/AuthorizationPane";
import AsideState from "absolvent.pl/Baobab/AsideState";
import React from "react";
import $ from "jquery";

// var offerSearchConfig = JSON.parse(document.getElementById("OfferSearchConfig").textContent);

var asideState = AsideState.create({});
var asideStateTree = asideState.data;

function redraw() {
    React.render(<AuthorizationPane
        {...asideStateTree.get()}
        onClose={asideState.actions.onClose}
        updateTitle={asideState.actions.updateTitle}
    ></AuthorizationPane>, document.getElementById(asideState.selector));
}

$("[data-role=\"aside-open-auth\"]").on("click", function () {
    asideStateTree.set("isVisible", true);
});

$("[data-role=\"update-title\"]").on("click", function () {
    asideState.actions.updateTitle("test wytrzymałości");
});

$("body").on("click", "[data-role=\"in-pane-aside\"]", function () {
    asideStateTree.set("isVisible", true);
});

asideStateTree.on("update", redraw);
