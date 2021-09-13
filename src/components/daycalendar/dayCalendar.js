import { DAYSOFWEEK } from "../config.js";

class DayCalendar extends HTMLElement {
    constructor() {
        super();
        this.date = new Date();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        DAYSOFWEEK.forEach(e => {
            let day = document.createElement("p");
            day.innerHTML = e;
            div.appendChild(day);
        })
        shadow.appendChild(div);
    }

    disconnectedCallback() {
        this._dispose && this_dispose();
    }


}
window.customElements.define("cap-daycalendar", DayCalendar);