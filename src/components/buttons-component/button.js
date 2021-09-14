import { CHANNEL } from "../../config.js"
import  PubSub  from "../../services/pubsub.js"
import css from './buttonsstyle.css.js';

const BUTTON = Object.freeze({
    UP: 1,
    DOWN: -1
})

const ACTION_IS_NULL = "La funcion del boton (action) no ha sido definida";

 
export class CalendarButton extends HTMLElement {

    constructor() {
        super();
        this.action = BUTTON.UP;
        this._shadow = this.attachShadow({mode: "open"});
    }

    static get observedAttributes() {
        return ['action'];
      }
    get action() {
        return this._action;
    }
    set action(value) {
        this._action = value;
    }
    
    _create(){
 
        let button = document.createElement("button");     
        button.setAttribute("action", this._action);
        this._shadow.appendChild(button);
    }

    _handlerClick(ev) {
        ev.stopPropagation();
        PubSub.emit(CHANNEL.CHANGEMONTH, this.action);
    }

    connectedCallback() {
        this.addEventListener("click", this._handlerClick);        
    }

    disconnectedCallback() {
        this.removeEventListener("click", this._handlerClick);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        let action = null;
        if (oldValue !== newValue && newValue) {
            action = BUTTON[newValue.toUpperCase()]
        }
        if (!action) {
            throw ACTION_IS_NULL;
        }
        this.action = action;
        this._getStyle();
        this._create();
    }
    
    static get observedAttributes() { return ['action']; }
    _getStyle(){
        this._shadow.adoptedStyleSheets = [css];
    }
}
customElements.define("cap-button", CalendarButton);