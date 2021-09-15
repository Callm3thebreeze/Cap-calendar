export class DateService{   
    
    static daysOfCalendar(date) {   
 
        function getFirstDayCalendar(date) {
            let firstDay = new Date(date);
            firstDay.setDate(1);
            while (firstDay.getDay() != 1) { firstDay.setDate(firstDay.getDate() - 1); }
            
            return firstDay;
        }
 
        function calendarMonth(date) {
            let calendar = [];
            const firstDayCalendar = getFirstDayCalendar(date);
            let i = 1;
            for (i = 0; i < 42; i++) {
                let fecha = new Date(firstDayCalendar);
                calendar.push({ date: fecha, 
                                isToday: DateService.isToday(firstDayCalendar, new Date()), 
                                isThisMonth: DateService.isThisMonth(firstDayCalendar, date), 
                                isSelected: false });
                firstDayCalendar.setDate(firstDayCalendar.getDate() + 1);
            }
            return calendar;
        }
 
        return calendarMonth(date);
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