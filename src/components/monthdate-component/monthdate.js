import { FormatService } from "../../services/formatservice.js";
import pubSub from "../../services/pubsub.js"
import css from './monthdate.css.js';
import { ComponentDateBase } from "../core/componentdatebase.js";
import { DateService } from "../../services/dateservice.js";
import { CHANNEL } from "../../config.js";

export class MonthDate extends ComponentDateBase{

    _changeDate(value){
        return !this.date || !DateService.isMonth(value, this._oldDate);
    }

    _formatDate(){
        return FormatService.getMonthDate(this.date);
    }

    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }

    connectedCallback() {
        const texto = super._create
        const disposableDate = pubSub.on(CHANNEL.CHANGEDATE, (date) => {
             if (!DateService.isThisMonth(date, new Date())) {
                 super._update(texto,date)
             }
         })
         const disposableMonth = pubSub.on(CHANNEL.CHANGEMONTH, (diff) => {
             let newDate = this._date;
             newDate.setMonth(this._date.getMonth() + diff);
             super._update(texto,newDate)
         })
         this._disposables.push(disposableDate, disposableMonth);
     }
}
customElements.define('cap-monthdate', MonthDate);