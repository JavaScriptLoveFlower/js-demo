interface optionsInter {
    val: any;
    length: number;
}
interface appointLen {
    start: number;
    end: number;
    val: any;
}
declare type interCheck = (val: any) => boolean;
declare type superInterCheck = (options: optionsInter) => boolean;
declare type appointLenInterCheck = (options: appointLen) => boolean;
export default class reCheck {
    checkPhone: interCheck;
    checkEmail: interCheck;
    checkUrl: interCheck;
    checkDomesticTelephone: interCheck;
    checkNotSpecial: appointLenInterCheck;
    checkTimeType: interCheck;
    checkBlank: interCheck;
    checkHtml: interCheck;
    checkFirstPlaceBlank: interCheck;
    checkQQ: interCheck;
    checkPostOffice: interCheck;
    checkIP: interCheck;
    checkDateFormat: interCheck;
    checkLowerCase: interCheck;
    checkUpperCase: interCheck;
    checkAlphabets: interCheck;
    checkCID: interCheck;
    checkPasswordSpecification: interCheck;
    checkDChineseCharacterDetection: interCheck;
    checkNumberUnderscoreletter: interCheck;
    checkChineseNumberEnglishUnderline: interCheck;
    checkSpecialCharacters: interCheck;
    checkStrComposedOfNumber: interCheck;
    checkNumberLength: superInterCheck;
    checkAppointLen: appointLenInterCheck;
    checkZeroAndNonZero: interCheck;
    checkTwoDecimalplaces: interCheck;
    checkDecimalplaces: interCheck;
    checkPND: interCheck;
    checkPositiveTDP: interCheck;
    checkOandTPositive: interCheck;
    checkNonzeroPositive: interCheck;
    checkNonzeroNegative: interCheck;
    checkNotNegative: interCheck;
    checkNotPositive: interCheck;
    checkNotNegativeFloat: interCheck;
    checkNotPositiveFloat: interCheck;
    checkPositiveFloat: interCheck;
    checkNegativeFloat: interCheck;
    checkFloat: interCheck;
    checkEndlessZero: interCheck;
}
export {};
