import { BadRequestError } from '../exceptions';

export class IntegerInterval {
    private readonly lowerBound: number;

    private readonly upperBound: number;

    private readonly value: number;

    constructor(valueName: string, value: number, lowerBound: number, upperBound: number) {
        if (value === undefined) {
            throw new BadRequestError(`${valueName} is undefined.`);
        }
        if (lowerBound >= upperBound) {
            throw new BadRequestError(`${valueName} has an invalid interval.`);
        }
        if (!Number.isInteger(value)) {
            throw new BadRequestError(`${valueName} must be an integer.`);
        }
        if (value < lowerBound || value > upperBound) {
            throw new BadRequestError(`${valueName} must be between ${lowerBound} and ${upperBound}.`);
        }
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.value = value;
    }

    getValue(): number {
        return this.value;
    }

    getLowerBound(): number {
        return this.lowerBound;
    }

    getUpperBound(): number {
        return this.upperBound;
    }
}
