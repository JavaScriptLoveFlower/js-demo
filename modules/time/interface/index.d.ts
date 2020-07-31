interface TimeFormal {
    isTimestamp: boolean;
    startTime: any;
    type?: 'day' | 'hours' | 'minutes' | 'seconds' | 'HoursMinutes' | 'HoursMinutesSeconds' | 'timeHours' | 'timeHoursMinutes';
    endTime?: any;
    [prop: string]: any;
}
interface TimeDiffer<T> {
    oTime: T;
    nTime: T;
    differ: T;
}
interface FormatTime {
    time: number;
    formatStr: string;
    [prop: string]: any;
}
interface existNumber {
    beginTime?: number;
    lastTime: number;
    time: number;
}
interface existString {
    beginTime?: string;
    lastTime: string;
    time: string;
}
declare type TimeFunc = (data: number) => string;
declare type TimeOptionsFunc = (options: TimeFormal) => string;
declare type Format = (options: FormatTime) => string;
declare type dayInter = (formatStr?: string) => any;
declare type numberInter = () => number;
declare type stringInter = () => string;
declare type cycleInter = (formatStr?: string) => object;
declare type getDateInter = (time: Date, count: number) => string;
declare type existInter = (options: existNumber | existString) => boolean;
export { TimeDiffer, TimeFunc, TimeOptionsFunc, Format, dayInter, numberInter, stringInter, cycleInter, getDateInter, existInter };
