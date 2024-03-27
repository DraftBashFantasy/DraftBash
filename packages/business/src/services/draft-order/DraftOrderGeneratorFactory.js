"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrderGeneratorFactory = void 0;
const LinearDraftOrderGenerator_1 = require("./draft-order-generators/LinearDraftOrderGenerator");
const SnakeDraftOrderGenerator_1 = require("./draft-order-generators/SnakeDraftOrderGenerator");
// Generates a draft order based on the draft type.
class DraftOrderGeneratorFactory {
    getDraftOrderGenerator(draftOrderType) {
        switch (draftOrderType) {
            case 'snake':
                return new SnakeDraftOrderGenerator_1.SnakeDraftOrderGenerator();
            case 'linear':
                return new LinearDraftOrderGenerator_1.LinearDraftOrderGenerator();
            default:
                return new SnakeDraftOrderGenerator_1.SnakeDraftOrderGenerator();
        }
    }
}
exports.DraftOrderGeneratorFactory = DraftOrderGeneratorFactory;
