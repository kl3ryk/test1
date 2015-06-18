"use strict";

import AuthorizationPane from "absolvent.pl/React/AuthorizationPane";
import UserState from "absolvent.pl/Baobab/UserState";
import React from "react";

// var offerSearchConfig = JSON.parse(document.getElementById("OfferSearchConfig").textContent);
var userState = UserState.create({});
var userStateStateTree = userState.data;

function redraw() {
    // var favourites = userStateStateTree.get("favourites");
    React.render(<AuthorizationPane isVisible={true} title={"test 213 test123"} />, document.getElementById("asideTest1"));
}

userStateStateTree.on("update", redraw);
redraw();
