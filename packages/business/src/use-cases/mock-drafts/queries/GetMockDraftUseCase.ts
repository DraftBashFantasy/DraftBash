import { IGetMockDraftUseCase, UserResponse, MockDraftResponse } from '../../../../../contracts';
import { UserEntity } from '../../../entities';
import { BadRequestError, DraftNotFoundError } from '../../../exceptions';
import { IUsersRepository, IMockDraftsRepository } from '../../../../../contracts/src/persistence';

export class GetMockDraftsUseCase implements IGetMockDraftUseCase {
    private readonly mockDraftsRepository: IMockDraftsRepository;

    private readonly usersRepository: IUsersRepository;

    constructor(mockDraftsRepository: IMockDraftsRepository, usersRepository: IUsersRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
        this.usersRepository = usersRepository;
    }

    public async getMockDraft(draftId: number): Promise<MockDraftResponse> {
        const mockDraftEntity = await this.mockDraftsRepository.getMockDraft(draftId);

        if (mockDraftEntity === null) {
            throw new DraftNotFoundError(`Draft with id ${draftId} not found`);
        }

        const scheduledByUser: UserEntity | null = await this.usersRepository.getUser(mockDraftEntity.getScheduledByUserId());

        if (scheduledByUser === null) {
            throw new BadRequestError(`User with id ${mockDraftEntity.getScheduledByUserId()} not found`);
        }

        let userResponse: UserResponse | null = null;

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
