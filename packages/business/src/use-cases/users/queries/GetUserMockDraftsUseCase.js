"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserMockDraftsUseCase = void 0;
class GetUserMockDraftsUseCase {
    mockDraftsRepository;
    usersRepository;
    constructor(mockDraftsRepository, usersRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
        this.usersRepository = usersRepository;
    }
    async getUserMockDrafts(draftId) {
        const mockDraftEntities = await this.mockDraftsRepository.getUserMockDrafts(draftId);
        const mockDraftResponses = await Promise.all(mockDraftEntities.map(async (mockDraftEntity) => {
            const scheduledByUser = await this.usersRepository.getUser(mockDraftEntity.getScheduledByUserId());
            let userResponse = null;
            if (scheduledByUser !== null) {
                userResponse = {
                    userId: scheduledByUser.getUserId(),
                    username: scheduledByUser.getUsername(),
                    email: scheduledByUser.getEmail(),
                };
            }
            return {
                draftId: mockDraftEntity.getDraftId(),
                scheduledByUser: userResponse,
                draftSettings: {
                    orderType: mockDraftEntity.getOrderType(),
                    scoringType: mockDraftEntity.getScoringType(),
                    pickTimeSeconds: mockDraftEntity.getPickTimeSeconds(),
                    teamCount: mockDraftEntity.getTeamCount(),
                    pointguardSlots: mockDraftEntity.getPointguardSlots(),
                    shootingguardSlots: mockDraftEntity.getShootingguardSlots(),
                    guardSlots: mockDraftEntity.getGuardSlots(),
                    smallforwardSlots: mockDraftEntity.getSmallforwardSlots(),
                    powerforwardSlots: mockDraftEntity.getPowerforwardSlots(),
                    forwardSlots: mockDraftEntity.getForwardSlots(),
                    centerSlots: mockDraftEntity.getCenterSlots(),
                    utilitySlots: mockDraftEntity.getUtilitySlots(),
                    benchSlots: mockDraftEntity.getBenchSlots(),
                },
            };
        }));
        return mockDraftResponses;
    }
}
exports.GetUserMockDraftsUseCase = GetUserMockDraftsUseCase;
