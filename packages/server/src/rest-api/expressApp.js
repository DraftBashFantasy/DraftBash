"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
const routes_2 = require("./routes");
const cache_1 = require("./middleware/cache");
dotenv_1.default.config();
exports.expressApp = (0, express_1.default)();
exports.expressApp.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
}));
exports.expressApp.use(express_1.default.json());
exports.expressApp.use(cache_1.setCache);
exports.expressApp.use('/api/v1/users', routes_1.usersRouter);
exports.expressApp.use('/api/v1/mock-drafts', routes_2.mockDraftsRouter);
exports.expressApp.get('/', (req, res) => {
    res.send('The Draftbash API');
});
