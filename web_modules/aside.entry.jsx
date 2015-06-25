"use strict";

import ActionPanel from "absolvent.pl/React/ActionPanel";
import ActionPanelState from "absolvent.pl/Baobab/ActionPanelState";
import React from "react";
import $ from "jquery";

// var offerSearchConfig = JSON.parse(document.getElementById("OfferSearchConfig").textContent);

var actionPanelState = ActionPanelState.create({});
var actionPanelStateTree = actionPanelState.data;

function redraw() {
    React.render(<ActionPanel
        {...actionPanelStateTree.get()}
        onClose={actionPanelState.actions.onClose}
        updateTitle={actionPanelState.actions.updateTitle} />, document.getElementById(actionPanelState.selector));
}

$("[data-role=\"aside-open-auth\"]").on("click", function () {
    actionPanelStateTree.set("type", 1);
    actionPanelStateTree.set("isVisible", true);
});


// $("[data-role=\"aside-open-other\"]").on("click", function () {
//     actionPanelStateTree.set("type", 2);
//     actionPanelStateTree.set("isVisible", true);
// });

$("[data-role=\"update-title\"]").on("click", function () {
    actionPanelState.actions.updateTitle("test wytrzymałości");
});

// $("body").on("click", "[data-role=\"in-pane-aside\"]", function () {
//     actionPanelStateTree.set("type", 1);
//     actionPanelStateTree.set("isVisible", true);
// });

actionPanelStateTree.on("update", redraw);
redraw();
