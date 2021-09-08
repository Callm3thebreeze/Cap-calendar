export class PubSub {
    constructor(){
        this.map = new Map();
    }
    

    on(channel, handler){

    }
    emit(channel, data){
        return ()=>{};
    }

}
export default new PubSub();