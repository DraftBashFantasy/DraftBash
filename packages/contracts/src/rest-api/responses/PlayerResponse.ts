export type PlayerResponse = {
    playerId: number;
    firstName: string;
    lastName: string;
    fantasyPositions: string[];
    age: number;
    height: number;
    weight: number;
    team: string;
    depthChartOrder: string;
    injuryStatus: string;
    recentNews: string;
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
        threePointers: number;
        minutes: number;
        gamesPlayed: number;
    }
};
