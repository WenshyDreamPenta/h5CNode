import React, { Component } from "react";
import { render } from "react-dom";
import App from "../src/App";
import { AppContainer } from "react-hot-loader";
import "babel-polyfill";

const renderDom = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("app")
    );
};
renderDom(App);

if (module.hot) {
    module.hot.accept("../src/App", () => {
        const App = require("../src/App").default;
        renderDom(App);
    });
}
