// dada una date te devuelve los días que imprime el calendario

function getFirstDayCalendar(date) {
    date.setDate(1);
    while (date.getDay() != 1) { date.setDate(date.getDate() - 1); }
}


export class DateService {

    static daysOfCalendar(date) {
        let calendar = [];
        getFirstDayCalendar(date);

        for (let i = 0; i < 42; i++) {
            calendar.push(new Date(date));
            date.setDate(date.getDate() + 1); //ahora necesitamos array de objetos Date
        }
        return calendar;
    }



    static getNextOrPreviousMonth(date, diff) {
        date.setMonth(date.getMonth() + diff);
        return DateService.getDayOfMonth(date);
    }

    static isToday(date, newDate) {
        return (date.getDate() === newDate.getDate()
            && date.getMonth() === newDate.getMonth()
            && date.getFullYear() === newDate.getFullYear())
    }

    static isThisMonth(date, newDate) {
        return date.getMonth() === newDate.getMonth() &&
            date.getFullYear() === newDate.getFullYear();
    }


}

