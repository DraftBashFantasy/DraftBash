

export type GamelogResponse = {
    season: number;
    dateUTC: string;
    playerTeam: {
        teamId: string;
        name: string;
        abbreviation: string;
        location: string;
    };
    isHomeGame: boolean;
    opposingTeam: {
        teamId: string;
        name: string;
        abbreviation: string;
        location: string;
    };
    playerTeamScore: number;
    opposingTeamScore: number;
    playerId: number;
    position: string;
    isStarter: boolean;
    isActive: boolean;
    minutes: number;
    points: number;
    fieldGoalsMade: number;
    fieldGoalsAttempted: number;
    threesMade: number;
    threesAttempted: number;
    freeThrowsMade: number;
    freeThrowsAttempted: number;
    reboundsOffensive: number;
    reboundsDefensive: number;
    reboundsTotal: number;
    assists: number;
    steals: number;
    blocks: number;
    turnovers: number;
    fouls: number;
    plusMinus: number;
};
