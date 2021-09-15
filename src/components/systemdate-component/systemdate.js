import { FormatService } from "../../services/formatservice.js";
import css from './systemdate.css.js';
import { ComponentDateBase } from "../core/componentdatebase.js";
import { DateService } from "../../services/dateservice.js";

export class SystemDate extends ComponentDateBase{

    _changeDate(value){
        return !this.date || !DateService.isToday(value, this._oldDate);
    }

    _formatDate(){
        return FormatService.getSystemDate(this.date);
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
}
customElements.define('cap-systemdate', SystemDate);