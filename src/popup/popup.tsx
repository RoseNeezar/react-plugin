import React from "react";
import ReactDom from "react-dom";
import "./popup.css";

const Popup = <img src="icon.png" />;

const root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(Popup, root);
