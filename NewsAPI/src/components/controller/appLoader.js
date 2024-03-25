"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_1 = __importDefault(require("./loader"));
class AppLoader extends loader_1.default {
    constructor() {
        let url = process.env.API_URL;
        let apiKey = process.env.API_KEY;
        if (url && apiKey) {
            super(url, {
                apiKey: apiKey,
            });
        }
        else {
            console.error("URL not set");
        }
    }
}
exports.default = AppLoader;
