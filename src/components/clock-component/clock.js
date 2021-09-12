import {formatService} from "../../services/formatService.js"


class Clock extends HTMLElement{

    constructor(){
        super();
        this.date = new Date();
    }


    formatCurrentHour(){
        return formatService.getClockFormat(this.Date);
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" })
        const text = document.createTextNode(this.formatCurrentHour());
        shadow.appendChild(text);
        
    }
}

window.customElements.define("cap-clock", Clock)
export {Clock}