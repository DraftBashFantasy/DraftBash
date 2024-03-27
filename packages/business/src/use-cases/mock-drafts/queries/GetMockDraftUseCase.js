"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMockDraftsUseCase = void 0;
const exceptions_1 = require("../../../exceptions");
class GetMockDraftsUseCase {
    mockDraftsRepository;
    usersRepository;
    constructor(mockDraftsRepository, usersRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
        this.usersRepository = usersRepository;
    }
    async getMockDraft(draftId) {
        const mockDraftEntity = await this.mockDraftsRepository.getMockDraft(draftId);
        if (mockDraftEntity === null) {
            throw new exceptions_1.DraftNotFoundError(`Draft with id ${draftId} not found`);
        }
        const scheduledByUser = await this.usersRepository.getUser(mockDraftEntity.getScheduledByUserId());
        if (scheduledByUser === null) {
            throw new exceptions_1.BadRequestError(`User with id ${mockDraftEntity.getScheduledByUserId()} not found`);
        }
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
    }
}
exports.GetMockDraftsUseCase = GetMockDraftsUseCase;
