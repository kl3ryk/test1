"use strict";

import _ from "lodash";
import Baobab from "baobab";

function create(initialData) {
    var stateTree = new Baobab(_.merge({
        "isVisible": false,
        "title": ""
    }, initialData));

    return {
        "data": stateTree,
        "selector": "action-panel",
        "type": 1,
        "actions": {
            "onClose": function () {
                stateTree.set("isVisible", false);
            },
            "updateTitle": function (title) {
                stateTree.set("title", title);
            }
        }
    };
}

export default {
    "create": create
};
