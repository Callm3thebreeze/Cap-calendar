import { FormatService } from "../../services/formatservice.js";
import css from './monthdate.css.js';
import { ComponentDateBase } from "../core/componentdatebase.js";
import { DateService } from "../../services/dateservice.js";

export class MonthDate extends ComponentDateBase{

    _changeDate(value){
        return !this.date || !DateService.isMonth(value, this._oldDate);
    }

    _formatDate(){
        return FormatService.getMonth(this.date);
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
}
customElements.define('cap-monthdate', MonthDate);