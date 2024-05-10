import { MockDraftResponse, UserResponse, IGetUserMockDraftsUseCase } from '../../../../../contracts';
import { UserEntity, MockDraftEntity } from '../../../entities';
import { IMockDraftsRepository, IUsersRepository } from '../../../../../contracts/src/persistence';

export class GetUserMockDraftsUseCase implements IGetUserMockDraftsUseCase {
    private readonly mockDraftsRepository: IMockDraftsRepository;

    private readonly usersRepository: IUsersRepository;

    constructor(mockDraftsRepository: IMockDraftsRepository, usersRepository: IUsersRepository) {
        this.mockDraftsRepository = mockDraftsRepository;
        this.usersRepository = usersRepository;
    }

    public async getUserMockDrafts(userId: number): Promise<MockDraftResponse[]> {
        const mockDraftEntities: MockDraftEntity[] = await this.mockDraftsRepository.getUserMockDrafts(userId);

        const mockDraftResponses: MockDraftResponse[] = await Promise.all(
            mockDraftEntities.map(async (mockDraftEntity) => {
                const scheduledByUser: UserEntity | null = await this.usersRepository.getUser(
                    mockDraftEntity.getScheduledByUserId()
                );

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
            })
        );

        return mockDraftResponses;
    }
}
