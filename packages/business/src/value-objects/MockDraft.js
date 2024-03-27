"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockDraft = void 0;
const exceptions_1 = require("../exceptions");
class MockDraft {
    scheduledByUserId;
    draftSettings;
    constructor(scheduledByUserId, draftSettings) {
        if (!Number.isInteger(scheduledByUserId) || scheduledByUserId <= 0) {
            throw new exceptions_1.BadRequestError('scheduledByUserId must be an integer greater than 0.');
        }
        this.scheduledByUserId = scheduledByUserId;
        this.draftSettings = draftSettings;
    }
    getScheduledByUserId() {
        return this.scheduledByUserId;
    }
    getOrderType() {
        return this.draftSettings.getOrderType();
    }
    getScoringType() {
        return this.draftSettings.getScoringType();
    }
    getPickTimeSeconds() {
        return this.draftSettings.getPickTimeSeconds();
    }
    getTeamCount() {
        return this.draftSettings.getTeamCount();
    }
    getPointguardSlots() {
        return this.draftSettings.getPointguardSlots();
    }
    getShootingguardSlots() {
        return this.draftSettings.getShootingguardSlots();
    }
    getGuardSlots() {
        return this.draftSettings.getGuardSlots();
    }
    getSmallforwardSlots() {
        return this.draftSettings.getSmallforwardSlots();
    }
    getPowerforwardSlots() {
        return this.draftSettings.getPowerforwardSlots();
    }
    getForwardSlots() {
        return this.draftSettings.getForwardSlots();
    }
    getCenterSlots() {
        return this.draftSettings.getCenterSlots();
    }
    getUtilitySlots() {
        return this.draftSettings.getUtilitySlots();
    }
    getBenchSlots() {
        return this.draftSettings.getBenchSlots();
    }
}
exports.MockDraft = MockDraft;
