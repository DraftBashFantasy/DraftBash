export type PlayerResponse = {
    playerId: number;
    nbaApiPlayerId: number;
    firstName: string;
    lastName: string;
    fantasyPositions: string[];
    age: number;
    height: number;
    weight: number;
    depthChartOrder: string;
    injuryStatus: string;
    recentNews: string;
    jerseyNumber: number;
    team: {
        name: string;
        abbreviation: string;
        location: string;
    }
    seasonProjections: {
        pointsLeagueRank: number;
        categoryLeagueRank: number;
        points: number;
        rebounds: number;
        assists: number;
        steals: number;
        blocks: number;
        turnovers: number;
        fieldGoalPercentage: number;
        freeThrowPercentage: number;
        threesMade: number;
        minutes: number;
        gamesPlayed: number;
    },
    seasonTotals: {
        points: number;
        rebounds: number;
        assists: number;
        steals: number;
        blocks: number;
        turnovers: number;
        fieldGoalPercentage: number;
        freeThrowPercentage: number;
        threesMade: number;
        minutes: number;
        gamesPlayed: number;
    },
    addCount: number;
    dropCount: number;
};
