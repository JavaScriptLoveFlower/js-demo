declare type tasInterface = (func: any, awai?: number) => void;
declare type currencyInterface<T> = (val: T) => T;
export { tasInterface, currencyInterface };
