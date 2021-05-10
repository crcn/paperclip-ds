import * as React from "react";
import * as ui from "./hello-paperclip.pc";
import * as monday from "./monday.pc";
import * as card from "./card.pc";
import * as ReactDOM from "react-dom";
import "./Buttons/Index.tsx";

const mount = document.createElement("div");
document.body.appendChild(mount);

ReactDOM.render(<monday.Monday>Hello paperclip</monday.Monday>, mount);
ReactDOM.render(<ui.Message>Hello paperclip</ui.Message>, mount);
ReactDOM.render(<button.Button>Hello paperclip</button.Button>, mount);
ReactDOM.render(<card.Card>Hello paperclip</card.Card>, mount);
