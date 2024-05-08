import { PlayerGameProjectionsResponse } from "./PlayerGameProjectionsResponse";


export type PlayerResponse = {
    playerId: string;
    firstName: string;
    lastName: string;
    fantasyPositions: string[];
    position: string;
    age: number;
    height: number;
    weight: number;
    depthChartOrder: string;
    injuryStatus: string;
    recentNews: string;
    jerseyNumber: number;
    team: {
        teamId: string;
        name: string;
        abbreviation: string;
        location: string;
    };
    currentWeekProjections: PlayerGameProjectionsResponse[];
    seasonProjections: {
        pointsLeagueRanking: number;
        categoryLeagueRanking: number;
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
    };
    seasonTotals: {
        points: number;
        rebounds: number;
        assists: number;
        steals: number;
        blocks: number;
        turnovers: number;
        fieldGoalsAttempted: number;
        fieldGoalsMade: number;
        freeThrowsAttempted: number;
        freeThrowsMade: number;
        threesMade: number;
        minutes: number;
        gamesPlayed: number;
    };
    addCount: number;
    dropCount: number;
};
