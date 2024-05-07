export type PlayerGameProjectionsResponse = {
    gameId: string;
    playerId: string;
    dateUTC: string;
    playerTeam: {
        teamId: string;
        name: string;
        abbreviation: string;
        location: string;
    };
    opposingTeam: {
        teamId: string;
        name: string;
        abbreviation: string;
        location: string;
    };
    fieldGoalsAttempted: number;
    fieldGoalsMade: number;
    threesMade: number;
    points: number;
    steals: number;
    blocks: number;
    assists: number;
    rebounds: number;
    turnovers: number;
    freeThrowsAttempted: number;
    freeThrowsMade: number;
};
