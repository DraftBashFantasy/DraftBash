export declare class IntegerInterval {
    private readonly lowerBound;
    private readonly upperBound;
    private readonly value;
    constructor(valueName: string, value: number, lowerBound: number, upperBound: number);
    getValue(): number;
    getLowerBound(): number;
    getUpperBound(): number;
}
