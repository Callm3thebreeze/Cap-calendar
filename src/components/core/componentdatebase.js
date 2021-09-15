import { CHANNEL } from "../../config.js"
import  PubSub  from "../../services/pubsub.js"
const METHOD_NOT_IMPLEMENTED = "Method not implemented"
import css from './componentdatebase.css.js';

export class ComponentDateBase extends HTMLElement {

    constructor() {
        super();
        this.date = new Date();
        this._oldDate = new Date();
        this._disposables = [];
        this._create();
    }

    set date(value) {
        this._oldDate = this.date;
        if (this._changeDate(value)) {
            this._date = value;
            this._text && (this._update());
        }
    }

    get date() {
        return this._date;
    }


    _create() {
        this._text = document.createTextNode("");
        this._shadow = this.attachShadow({mode: "open"});
        this._shadow.adoptedStyleSheets = [css];
        if(this._isAnyStyle()){
            this._setStyle();
        }
        this._shadow.appendChild(this._text);
        this._update();
    }
       

    _update() {
        this._text.data = this._formatDate();
    }


    _isAnyStyle(){
        return true;
    }


    _setStyle(){
        throw METHOD_NOT_IMPLEMENTED;
    }


    _subscribe(channel = CHANNEL.CHANGEDATE) {
        const dispose = PubSub.on(channel, (date) => {
            this.date = date;
        });
        this._disposables.push(dispose);
    }

    _changeDate(value) {
        throw METHOD_NOT_IMPLEMENTED;
    }


    _formatDate() {
        throw METHOD_NOT_IMPLEMENTED;
    }

    connectedCallback(){
        this._subscribe();
    }


    disconnectedCallback() {
        this._disposables.forEach(dispose => dispose && dispose());
        this._disposables = [];
    }

}