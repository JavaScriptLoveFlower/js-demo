"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var time_1 = __importDefault(require("./modules/time"));
var tools_1 = __importDefault(require("./modules/tools"));
var cache_1 = __importDefault(require("./modules/cache"));
var reCheck_1 = __importDefault(require("./modules/reCheck"));
var check = new reCheck_1.default();
exports.check = check;
var tools = new tools_1.default();
exports.tools = tools;
var cache = new cache_1.default();
exports.cache = cache;
var time = new time_1.default();
exports.time = time;
