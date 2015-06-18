"use strict";

import AuthorizationPane from "absolvent.pl/React/AuthorizationPane";
import Baobab from "baobab";
// import UserState from "absolvent.pl/Baobab/UserState";
import React from "react";
import $ from "jquery";

// var offerSearchConfig = JSON.parse(document.getElementById("OfferSearchConfig").textContent);
// var userState = UserState.create({});
// var userStateStateTree = userState.data;

var stateTree = new Baobab({
    "isAsideVisible": false
});

function redraw() {
    // var favourites = userStateStateTree.get("favourites");
    React.render(<AuthorizationPane
        {...stateTree.get()}
        onClose={() => stateTree.set("isAsideVisible", false)}
    ></AuthorizationPane>, document.getElementById("asideTest1"));
}

$("[data-role=\"aside-open\"]").on("click", function () {
    stateTree.set("isAsideVisible", true);
});

stateTree.on("update", redraw);
redraw();

// userStateStateTree.on("update", redraw);
// redraw();
