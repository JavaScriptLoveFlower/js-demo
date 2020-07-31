interface objInter {
    value: any;
    distance: number;
    now: number;
}
declare type localInter = (key: any, value: any, distance: number) => void;
declare type onlyKet = (key: any) => void;
export { objInter, localInter, onlyKet };
