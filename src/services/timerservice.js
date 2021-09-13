import pubSub from "../services/pubsub"
import { INTERVAL, CHANNEL } from "../config.js"
import { timerInterface } from "./timerinterface"
class TimerService {
    constructor(pubSub, timerInterface) {
        this._pubSub = pubSub;
        this._timerInterface = timerInterface;
        this._intervalID = this._timerInterface.setInterval(() => {
            const date = new Date();
            this._pubSub.emit(CHANNEL.CHANGEDATE, date)
        }, INTERVAL);
    }
    dispose() {
        this._timerInterface.clearInterval(this._intervalID);
    }
}
export default new TimerService(pubSub, timerInterface);