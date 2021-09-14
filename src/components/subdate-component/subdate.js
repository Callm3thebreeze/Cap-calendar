import { FormatService } from "../../services/formatservice.js";
import { ComponentDateBase } from "../core/componentdatebase.js";
import { CHANNEL } from '../../config.js';
import css from './subdate.css.js';

class SubDate extends ComponentDateBase {

    connectedCallback() {
        this._subscribe(CHANNEL.CHANGESELECTEDATE);
    }
    _changeDate() {
        return true;
    }
    _formatDate() {
        return FormatService.getSubDate(this.date);
    }
    _setStyle(){
        this._shadow.adoptedStyleSheets = [...this._shadow.adoptedStyleSheets, css];
    }
}
customElements.define("cap-subdate", SubDate);