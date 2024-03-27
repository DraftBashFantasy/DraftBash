"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const http_1 = __importDefault(require("http"));
const expressApp_1 = require("./rest-api/expressApp");
// HTTP request server. Receives and sends requests for the web API and websockets. This is the main entry point.
exports.httpServer = http_1.default.createServer(expressApp_1.expressApp);
const PORT = process.env.PORT || 3000;
exports.httpServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
