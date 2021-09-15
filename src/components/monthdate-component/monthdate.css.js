const sheet = new CSSStyleSheet();
sheet.replace(`
            :host{
                color: #7FB2F0;
                padding: 1em 1em;
                flex-grow: 0;
                display: inline-block;
                width: 14em;
                }
            :host(:hover) {
                color: #9A9EA1;
            }`
)

export default sheet