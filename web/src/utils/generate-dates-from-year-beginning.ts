import dayjs from "dayjs";

export function generateDatesFromYearBeginnig() {
    const firstDayOfTheYear = dayjs().startOf("year")
    const today = new Date()

    const dates = []
    let compareDate = firstDayOfTheYear

    //Equanto for antrior ao dia atual
    while(compareDate.isBefore(today)) {
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, "day")
    }

    return dates
}