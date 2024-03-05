import { IDraftOrderGenerator } from '../IDraftOrderGenerator';

export class SnakeDraftOrderGenerator implements IDraftOrderGenerator {
    generate(numberOfTeams: number, teamSize: number): number[] {
        let draftOrder: number[] = [];

        // Iterate through each round of the draft
        for (let round = 0; round < teamSize; round++) {
            // Iterate through each team in the current round
            for (let index = 0; index < numberOfTeams; index++) {
                // Determine the order based on the round and team number
                let teamNumber;

                // If the round is even, append team numbers in natural order
                if (round % 2 === 0) {
                    teamNumber = index + 1;
                } else {
                    // If the round is odd, append team numbers in reverse order
                    teamNumber = numberOfTeams - index;
                }

                // Use the spread operator to append the teamNumber to the draftOrder array
                draftOrder = [...draftOrder, teamNumber];
            }
        }

        // Return the final draft order array
        return draftOrder;
    }
}
