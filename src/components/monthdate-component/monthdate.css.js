const sheet = new CSSStyleSheet();
sheet.replace(`
            :host{
                color: rgb(230,230,230);
                padding: 1em 1em;
                flex-grow: 0;
                display: inline-block;
                width: 14em;
                }
            :host(:hover) {
                color:white;
            }`
)

export default sheet