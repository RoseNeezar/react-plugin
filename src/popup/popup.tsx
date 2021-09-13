import React from "react";
import ReactDom from "react-dom";

const Popup = <div>Popup</div>;

const root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(Popup, root);
