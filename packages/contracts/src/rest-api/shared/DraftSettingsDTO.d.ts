export type DraftSettingsDTO = {
    orderType: string;
    scoringType: string;
    pickTimeSeconds: number | null;
    teamCount: number;
    pointguardSlots: number;
    shootingguardSlots: number;
    guardSlots: number;
    smallforwardSlots: number;
    powerforwardSlots: number;
    forwardSlots: number;
    centerSlots: number;
    utilitySlots: number;
    benchSlots: number;
};
