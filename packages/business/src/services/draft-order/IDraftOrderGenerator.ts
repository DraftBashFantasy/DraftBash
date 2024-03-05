export interface IDraftOrderGenerator {
    generate(numberOfTeams: number, teamSize: number): number[];
}
