import { ComponentDateBase } from "../components/core/componentDateBase.js";
import {formatService} from "../services/formatService.js"
import sheet from './clock.css.js';

class Clock extends ComponentDateBase{

    constructor(){
        super();
        this.date = new Date();
    }


    formatCurrentHour(){
        return formatService.getClockFormat(this.Date);
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" })
        const div = document.createElement("div");
        const text = document.createTextNode(this.formatCurrentHour());
        div.appendChild(text);
        shadow.appendChild(div);
        
    }
}

window.customElements.define("cap-clock", Clock)
export {Clock}