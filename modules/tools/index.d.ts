import { tasInterface, currencyInterface } from './interface';
export default class Tas {
    throttle: tasInterface;
    debounce: tasInterface;
    getUrlKey(name: string): any;
    isObjectLike: currencyInterface<any>;
    cached(fn: Function): Function;
    capitalize: currencyInterface<string>;
    getExplorerInfo(): any;
    Broswer(): boolean;
    getRawType(val: any): string;
    isStatic: currencyInterface<any>;
    unique(arr: any[]): any[];
    disableCopySelection(type?: string): void;
    viewWebPagePerformance(): void;
}
