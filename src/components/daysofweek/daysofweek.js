import { DAYSOFWEEK } from "../../config.js";
import css from "./daysofweek.css.js";

class DaysOfWeek extends HTMLElement {
    constructor() {
        super();
        this._create();
    }

    _create() {
        const shadow = this.attachShadow({ mode: "open" })
        DAYSOFWEEK.forEach(element => {
            const div = document.createElement("div");
            const text = document.createTextNode(element);
            div.appendChild(text);
            shadow.appendChild(div);
            shadow.adoptedStyleSheets = [css];
        });
    }
}
window.customElements.define("cap-daysofweek", DaysOfWeek);