"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorMsg(msg) {
    if (!msg)
        return;
    // @ts-ignore
    throw new Error(msg);
}
exports.ErrorMsg = ErrorMsg;
