// dada una fecha te devuelve los días que imprime el calendario

function getFirstDayCalendar(date) {
    fecha.setDate(1);
    while (fecha.getDay() != 1) { fecha.setDate(fecha.getDate() - 1); }
}



export class DateService{       

    static daysOfCalendar(date) {   
        let calendar = [];
        getFirstDayCalendar(date);
        
        for (let i = 0; i < 42; i++) {
            calendar.push(fecha.push(new Date(date)));
            fecha.setDate(fecha.getDate() + 1); //ahora necesitamos array de objetos Date
        }
        return calendar;
    }

    

    static addMonth(date, diff) {
        date.setMonth(date.getMonth() + diff);
        return DateService.getDayOfMonth(date);

    }
        
    
}

