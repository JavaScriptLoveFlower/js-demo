import { TimeDiffer, TimeFunc, TimeOptionsFunc, Format, dayInter, numberInter, stringInter, cycleInter, getDateInter, existInter } from './interface';
export default class Time {
    getHoroscope: TimeFunc;
    timeDifference: TimeOptionsFunc;
    getChatTime(options: TimeDiffer<number>): string | undefined;
    getTime: TimeFunc;
    dateFormat: Format;
    getLastDayOfMonth: numberInter;
    getFirstDayOfSeason: dayInter;
    getWeek: stringInter;
    getYearDay: numberInter;
    getYearWeek: numberInter;
    lastDay: numberInter;
    getDate: getDateInter;
    getWeekCycle: cycleInter;
    isExist: existInter;
}
