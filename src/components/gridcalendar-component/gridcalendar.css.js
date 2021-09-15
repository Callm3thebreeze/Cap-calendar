const sheet = new CSSStyleSheet();
sheet.replace(`:host{
                    border-bottom: 0.05em solid #7FB2F0;
                    color: #fffff;
                    background-color: #fffff;
                    font-family: sans-serif;
                    display: grid;
                    padding: 1rem 1.7rem;
                    gap: 0.8em 2em;
                    grid-template-columns: repeat(7,1em);
                    text-align: center;                    
                    cursor: default;
                    max-width: 19.6rem;
                }
                :host > div{
                    height: 1.7em;
                    width: 1.7em;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                    border-width: 2px;
                    border-style: solid;
                    border-color: transparent;
                }
                :host > div:hover{
                    border-color: #9A9EA1;
                }
                :host .isNotMonth{
                    color: #00000;
                }
                :host .isToday{
                    background-color: #7FB2F0;
                    
                }
                :host .selected {
                    box-shadow: inset 0 0 0 0.1em white;
                    border-color: #7FB2F0;
                    
                }`
    );
export default sheet;