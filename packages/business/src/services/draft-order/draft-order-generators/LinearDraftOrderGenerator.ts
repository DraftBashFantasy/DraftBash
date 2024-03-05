import { IDraftOrderGenerator } from '../IDraftOrderGenerator';

export class LinearDraftOrderGenerator implements IDraftOrderGenerator {
    generate(numTeams: number, teamSize: number): number[] {
        let draftOrder: number[] = [];
        // generates a linear draft order given the number of teams and team size.
        // e.g. 4 teams, 4 players per team = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
        for (let i = 0; i < numTeams * teamSize; i++) {
            draftOrder = [...draftOrder, (i % numTeams) + 1];
        }
        return draftOrder;
    }
}
