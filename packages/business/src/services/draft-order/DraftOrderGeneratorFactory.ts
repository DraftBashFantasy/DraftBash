import { IDraftOrderGenerator } from './IDraftOrderGenerator';
import { LinearDraftOrderGenerator } from './draft-order-generators/LinearDraftOrderGenerator';
import { SnakeDraftOrderGenerator } from './draft-order-generators/SnakeDraftOrderGenerator';

// Generates a draft order based on the draft type.
export class DraftOrderGeneratorFactory {
    public getDraftOrderGenerator(draftOrderType: string): IDraftOrderGenerator {
        switch (draftOrderType) {
            case 'snake':
                return new SnakeDraftOrderGenerator();
            case 'linear':
                return new LinearDraftOrderGenerator();
            default:
                return new SnakeDraftOrderGenerator();
        }
    }
}
