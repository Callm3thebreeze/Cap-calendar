import { FormatService } from "../../services/formatservice.js";
import { ComponentDateBase } from "../core/componentdatebase.js";
import sheet from './clock.css.js';

export class Clock extends ComponentDateBase {
 
    _formatDate(){
        return FormatService.getClockFormat(this.date);
    }

    _changeDate(value){
        return true;
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, sheet];
    }

}
window.customElements.define("cap-clock", Clock);