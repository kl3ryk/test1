"use strict";

import React from "react";
import shouldUpdate from "omniscient/shouldupdate";

export default React.createClass({
    "CONTENT_LOGIN_FORM": "content-login-form",
    "CONTENT_REMIND_FORM": "content-remind-form",
    "CONTENT_REGISTER_FORM": "content-register-form",
    "CONTENT_SUCCESS_MSG": "content-success-msg",

    "getInitialState": function () {
        return {
            "tabContentState": this.CONTENT_REGISTER_FORM
        };
    },
    "renderTabContent": function () {
        switch (this.state.tabContentState) {
            case this.CONTENT_LOGIN_FORM:
                return <div>
                    Login
                    <a href="#" onClick={() => this.setState({"tabContentState": this.CONTENT_REMIND_FORM})}>Zapomnialem hasla</a>
                </div>;
            case this.CONTENT_REMIND_FORM:
                return <div>
                    przypomnij hasło form
                    <a href="#" onClick={() => this.setState({"tabContentState": this.CONTENT_SUCCESS_MSG})}>Wyślij link do zmiany paska</a>
                </div>;
            case this.CONTENT_REGISTER_FORM:
                return <div>
                    register
                </div>;
            case this.CONTENT_SUCCESS_MSG:
                return <div>
                    UDALO SIE
                </div>;
        }
    },
    "render": function () {
        return <div className="authorization">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis vestibulum massa, et finibus augue egestas ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at elementum eros, ut varius arcu. Cras nec iaculis erat. Aenean ac massa lacinia, pharetra nunc sit amet, venenatis justo. In accumsan egestas cursus. Curabitur et sem convallis, pulvinar elit sed, ornare dui. Morbi ac porta nibh. Vivamus suscipit blandit tortor et congue. Nulla ac viverra arcu. Sed tristique luctus magna, vitae interdum erat pharetra tincidunt. Pellentesque bibendum nunc vitae mi vulputate, nec ultricies leo pellentesque. Fusce accumsan dolor quam, ac malesuada nibh luctus et. Etiam finibus placerat egestas.</p>
            <div>
                <a href="#" onClick={() => this.setState({"tabContentState": this.CONTENT_LOGIN_FORM})}>Mam konto</a>
                <a href="#" onClick={() => this.setState({"tabContentState": this.CONTENT_REGISTER_FORM})}>Załóż konto</a>
            </div>

            <div className="tabs">
                <div>{this.renderTabContent()}</div>
            </div>
        </div>;
    },
    "shouldComponentUpdate": shouldUpdate
});
