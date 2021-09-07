// dada una date te devuelve los días que imprime el calendario

function getFirstDayCalendar(date) {
    date.setDate(1);
    while (date.getDay() != 1) { date.setDate(date.getDate() - 1); }
}



export class DateService{       

    static daysOfCalendar(date) {   
        let calendar = [];
        getFirstDayCalendar(date);
        
        for (let i = 0; i < 42; i++) {
            calendar.push(date.push(new Date(date)));
            date.setDate(date.getDate() + 1); //ahora necesitamos array de objetos Date
        }
        return calendar;
    }

    

    static addMonth(date, diff) {
        date.setMonth(date.getMonth() + diff);
        return DateService.getDayOfMonth(date);

    }
        
    
}

