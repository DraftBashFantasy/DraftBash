"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearDraftOrderGenerator = void 0;
class LinearDraftOrderGenerator {
    generate(numTeams, teamSize) {
        let draftOrder = [];
        // generates a linear draft order given the number of teams and team size.
        // e.g. 4 teams, 4 players per team = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
        for (let i = 0; i < numTeams * teamSize; i++) {
            draftOrder = [...draftOrder, (i % numTeams) + 1];
        }
        return draftOrder;
    }
}
exports.LinearDraftOrderGenerator = LinearDraftOrderGenerator;
