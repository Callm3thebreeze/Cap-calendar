const sheet = new CSSStyleSheet();
sheet.replace(`:host{
   
    display: grid; 
    color: #9A9EA1;
    grid-template-columns: repeat(7, 3em);
    justify-items: flex-end;
    font-family: sans-serif;
   
}`)

export default sheet