import { IDraftOrderGenerator } from '../IDraftOrderGenerator';
export declare class LinearDraftOrderGenerator implements IDraftOrderGenerator {
    generate(numTeams: number, teamSize: number): number[];
}
