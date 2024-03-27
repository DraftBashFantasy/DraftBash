"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerInterval = void 0;
const exceptions_1 = require("../exceptions");
class IntegerInterval {
    lowerBound;
    upperBound;
    value;
    constructor(valueName, value, lowerBound, upperBound) {
        if (value === undefined) {
            throw new exceptions_1.BadRequestError(`${valueName} is undefined.`);
        }
        if (lowerBound >= upperBound) {
            throw new exceptions_1.BadRequestError(`${valueName} has an invalid interval.`);
        }
        if (!Number.isInteger(value)) {
            throw new exceptions_1.BadRequestError(`${valueName} must be an integer.`);
        }
        if (value < lowerBound || value > upperBound) {
            throw new exceptions_1.BadRequestError(`${valueName} must be between ${lowerBound} and ${upperBound}.`);
        }
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    getLowerBound() {
        return this.lowerBound;
    }
    getUpperBound() {
        return this.upperBound;
    }
}
exports.IntegerInterval = IntegerInterval;
