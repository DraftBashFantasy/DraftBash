"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftSettings = void 0;
const exceptions_1 = require("../exceptions");
const IntegerInterval_1 = require("./IntegerInterval");
class DraftSettings {
    orderType;
    scoringType;
    pickTimeSeconds;
    teamCount;
    pointguardSlots;
    shootingguardSlots;
    guardSlots;
    smallforwardSlots;
    powerforwardSlots;
    forwardSlots;
    centerSlots;
    utilitySlots;
    benchSlots;
    teamSize;
    constructor(settings) {
        const orderTypes = ['snake', 'linear'];
        const scoringTypes = ['points', 'category'];
        if (settings.orderType === undefined || settings.scoringType === undefined) {
            throw new exceptions_1.BadRequestError('Incorrectly formed request.');
        }
        if (!orderTypes.includes(settings.orderType)) {
            throw new exceptions_1.BadRequestError('Invalid order type.');
        }
        if (!scoringTypes.includes(settings.scoringType)) {
            throw new exceptions_1.BadRequestError('Invalid scoring type.');
        }
        if (settings.pickTimeSeconds == null) {
            this.pickTimeSeconds = null;
        }
        else {
            this.pickTimeSeconds = new IntegerInterval_1.IntegerInterval('pickTimeSeconds', settings.pickTimeSeconds, 30, 120);
        }
        const teamSize = settings.teamCount
            + settings.benchSlots
            + settings.utilitySlots
            + settings.pointguardSlots
            + settings.shootingguardSlots
            + settings.guardSlots
            + settings.smallforwardSlots
            + settings.powerforwardSlots
            + settings.forwardSlots
            + settings.centerSlots;
        if (teamSize <= 0) {
            throw new exceptions_1.BadRequestError('Team size must be greater than 0.');
        }
        this.teamSize = teamSize;
        this.orderType = settings.orderType;
        this.scoringType = settings.scoringType;
        this.teamCount = new IntegerInterval_1.IntegerInterval('teamCount', settings.teamCount, 8, 14);
        this.pointguardSlots = new IntegerInterval_1.IntegerInterval('pointguardSlots', settings.pointguardSlots, 0, 1);
        this.shootingguardSlots = new IntegerInterval_1.IntegerInterval('shootingguardSlots', settings.shootingguardSlots, 0, 1);
        this.guardSlots = new IntegerInterval_1.IntegerInterval('guardSlots', settings.guardSlots, 0, 1);
        this.smallforwardSlots = new IntegerInterval_1.IntegerInterval('smallforwardSlots', settings.smallforwardSlots, 0, 1);
        this.powerforwardSlots = new IntegerInterval_1.IntegerInterval('powerforwardSlots', settings.powerforwardSlots, 0, 1);
        this.forwardSlots = new IntegerInterval_1.IntegerInterval('forwardSlots', settings.forwardSlots, 0, 1);
        this.centerSlots = new IntegerInterval_1.IntegerInterval('centerSlots', settings.centerSlots, 0, 1);
        this.utilitySlots = new IntegerInterval_1.IntegerInterval('utilitySlots', settings.utilitySlots, 0, 4);
        this.benchSlots = new IntegerInterval_1.IntegerInterval('benchSlots', settings.benchSlots, 0, 4);
    }
    getOrderType() {
        return this.orderType;
    }
    getScoringType() {
        return this.scoringType;
    }
    getPickTimeSeconds() {
        return this.pickTimeSeconds ? this.pickTimeSeconds.getValue() : null;
    }
    getTeamCount() {
        return this.teamCount.getValue();
    }
    getPointguardSlots() {
        return this.pointguardSlots.getValue();
    }
    getShootingguardSlots() {
        return this.shootingguardSlots.getValue();
    }
    getGuardSlots() {
        return this.guardSlots.getValue();
    }
    getSmallforwardSlots() {
        return this.smallforwardSlots.getValue();
    }
    getPowerforwardSlots() {
        return this.powerforwardSlots.getValue();
    }
    getForwardSlots() {
        return this.forwardSlots.getValue();
    }
    getCenterSlots() {
        return this.centerSlots.getValue();
    }
    getUtilitySlots() {
        return this.utilitySlots.getValue();
    }
    getBenchSlots() {
        return this.benchSlots.getValue();
    }
    getTeamSize() {
        return this.teamSize;
    }
}
exports.DraftSettings = DraftSettings;
