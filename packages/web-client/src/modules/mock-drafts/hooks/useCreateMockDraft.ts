/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { MockDraft } from '../../../../../business/src/value-objects';
import { CreateMockDraftRequest } from '../../../../../contracts';
import { DraftSettings } from '../../../../../business/src/value-objects';
import { useNavigate } from 'react-router-dom';

export const useCreateMockDraft = () => {
    const [createMockDraftError, setMockDraftError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCreateMockDraft = async (settings: CreateMockDraftRequest) => {
        try {
            console.log(settings)
            const mockdraft = new MockDraft(settings.scheduledByUserId, new DraftSettings(settings.draftSettings));
            const response = await fetch((import.meta as any).env.VITE_REACT_API_URL + '/mock-drafts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    scheduledByUserId: mockdraft.getScheduledByUserId(),
                    draftSettings: {
                        orderType: mockdraft.getOrderType(),
                        scoringType: mockdraft.getScoringType(),
                        pickTimeSeconds: mockdraft.getPickTimeSeconds(),
                        teamCount: mockdraft.getTeamCount(),
                        pointguardSlots: mockdraft.getPointguardSlots(),
                        shootingguardSlots: mockdraft.getShootingguardSlots(),
                        guardSlots: mockdraft.getGuardSlots(),
                        smallforwardSlots: mockdraft.getSmallforwardSlots(),
                        powerforwardSlots: mockdraft.getPowerforwardSlots(),
                        forwardSlots: mockdraft.getForwardSlots(),
                        centerSlots: mockdraft.getCenterSlots(),
                        utilitySlots: mockdraft.getUtilitySlots(),
                        benchSlots: mockdraft.getBenchSlots(),
                    },
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMockDraftError(errorData.error);
            } else {
                navigate('/mock-drafts');
            }
        } catch (error: any) {
            console.log(error)
            setMockDraftError(error.message);
        }
    };

    return {
        handleCreateMockDraft,
        createMockDraftError,
    };
};