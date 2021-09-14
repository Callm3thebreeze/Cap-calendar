import { CHANNELS } from "../../config.js";
import  PubSub  from "../../services/pubsub.js"
import { FormatService } from "../../services/formatservice.js";
import { DateService } from "../../services/dateservice.js";
import css from "./gridcalendar.css.js";

class GridCalendar extends HTMLElement {
    constructor(){
        super();
        this.date = new Date();
        this._disposables = [];
    }

    _formatDate (date){
        return FormatService.getDay(date);
    }

    connectedCallback(){
        this._create();
        const disposableM = PubSub.on(CHANNELS.CHANGEMONTH, (diff) => {
            this.date.setMonth(this.date.getMonth() + diff);
            this_update();
        });
        const disposableD = PubSub.on(CHANNELS.CHANGEDATE, (newDate) => {
            if(this.date.getMonth() ==  newDate && this.date.getDay() != newDate.getDay()){
                this.date = newDate;
                this._update();
            }
        });
        this._disposables.push(disposableM, disposableD)
    }
    disconnectedCallback(){
        this._removeChildren();
        this._disposables.forEach(d => {
            d && disposable();
        });
    }    

    _create(){
        let nodes = [];
        nodes = DateService.daysOfCalendar(this.date);
        nodes.forEach(e => {
            let div = document.createElement("div");
            let text = document.createTextNode(this._formatDate(e.date));
            div.appendChild(text);
            div.addEventListener("click", () => PubSub.emit(CHANNELS.CHANGESELECTEDATE, e.date, false));
            div.addEventListener("click", () => {div.classList.add("selected")}, false);
            const disposable = PubSub.on(CHANNELS.CHANGESELECTEDATE, (e) => {
                div.classList.remove("selected"),
                e.isSelected = false;
            });
            this._disposables.push(disposable);
            if(!element.isSelected) {
                div.classList.remove("selected");
            }
            if(!element.isMonth) {
                div.classList.add("isNotMonth");
            }
            if(element.isToday) {
                div.classList.add("isToday");
            }
            this._shadow.appendChild(div);
            this._shadow.adoptedStyleSheets = [css];
        })
    }

    _update(){
        while (this._shadow.firstChild) {
            this._shadow.removeChild(this._shadow.lastChild);
        }
        this._create();
    }

    _removeChildren(){
        this._shadow.textContent="";
    }
}
window.customElements.define("cap-gridcalendar", GridCalendar);