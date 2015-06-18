"use strict";

import AuthorizationPane from "absolvent.pl/React/AuthorizationPane";
// import UserState from "absolvent.pl/Baobab/UserState";
import React from "react";
import $ from "jquery";

// var offerSearchConfig = JSON.parse(document.getElementById("OfferSearchConfig").textContent);
// var userState = UserState.create({});
// var userStateStateTree = userState.data;

function redraw() {
    // var favourites = userStateStateTree.get("favourites");
    React.render(<AuthorizationPane />, document.getElementById("asideTest1"));
}

$("[data-role=\"aside-open\"]").on("click", function () {
    redraw();
});

// userStateStateTree.on("update", redraw);
// redraw();
