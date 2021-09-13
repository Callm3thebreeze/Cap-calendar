import {FormatService} from "../../services/formatservice.js"

class Clock extends ComponentDateBase{

    constructor(){
        super();
        this.date = new Date();
    }


    formatCurrentHour(){
        return FormatService.getClockFormat(this.Date);
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" })
        const text = document.createTextNode(this.formatCurrentHour());
        shadow.appendChild(text);
        
    }
}

window.customElements.define("cap-clock", Clock)
export {Clock}