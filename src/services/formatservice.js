export class FormatService {

    static getClockFormat(date) {
        var options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }

    static getSystemDate(date) {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }

    static getMonthDate(date) {
        var options = { year: 'numeric', month: 'long' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
    }

    static getSubDate(date) {
        let today = new Date();
        if (today.getDate() === date.getDate() & today.getMonth() === date.getMonth() & today.getFullYear() === date.getFullYear()) {
            return "Today";
        } else {
            var options = { day: 'numeric', weekday: 'long' };
            return new Intl.DateTimeFormat('es-ES', options).format(date);
        }
    }

    static getDay(date){
        var options = {day:'numeric'};
        return new Intl.DateTimeFormat('es-ES',options).format(date);
    }
}
