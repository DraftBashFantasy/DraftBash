import React, { useEffect, useState } from 'react';
import { TbChevronCompactLeft } from 'react-icons/tb';
import { TbChevronCompactRight } from 'react-icons/tb';
import { Button, PageFrame } from '../../../shared';
import { MockDraftsViewer } from '../features/MockDraftsViewer';
import { useNavigate } from 'react-router-dom';
import { MockDraftResponse } from '../../../../../../contracts';
import { useAuth } from '../../../shared';


export function MockDraftsPage() {
    const navigate = useNavigate();
    const [isLeftArrowHovered, setLeftArrowHovered] = useState(false);
    const [isRightArrowHovered, setRightArrowHovered] = useState(false);
    const [slideDirection, setSlideDirection] = useState<string | null>(null);
    const [draftIndex, setDraftIndex] = useState(0);
    const [mockDrafts, setMockDrafts] = useState<MockDraftResponse[] | null>(null);
    const { user } = useAuth();

    useEffect(() => {
        // Assuming you have an API endpoint to fetch user drafts by userId
        fetch((import.meta as any).env.VITE_REACT_API_URL + `/users/${user?.userId}/mock-drafts`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                setMockDrafts(data);
                console.log(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const incrementMockDrafts = () => {
        if (mockDrafts) {
            const newIndex = (draftIndex + 1) % mockDrafts.length;
            //setMockDrafts(drafts[draftIndex]);
            setSlideDirection('right');
            setDraftIndex(newIndex);
        }
    };

    const decrementMockDrafts = () => {
        if (mockDrafts) {
            const newIndex = (draftIndex - 1 + mockDrafts?.length) % mockDrafts?.length;
            setSlideDirection('left');
            setDraftIndex(newIndex);
        }
    };

    return (
        <PageFrame>
            <TbChevronCompactLeft
                style={{ ...styles.leftArrow, opacity: isLeftArrowHovered ? 0.5 : 1 } as React.CSSProperties}
                onMouseEnter={() => setLeftArrowHovered(true)}
                onMouseLeave={() => setLeftArrowHovered(false)}
                onClick={decrementMockDrafts}
            />
            <MockDraftsViewer slideDirection={slideDirection} mockDraft={mockDrafts ? mockDrafts[draftIndex] : null} />
            <TbChevronCompactRight
                style={
                    {
                        ...styles.rightArrow,
                        opacity: isRightArrowHovered ? 0.5 : 1,
                    } as React.CSSProperties
                }
                onMouseEnter={() => setRightArrowHovered(true)}
                onMouseLeave={() => setRightArrowHovered(false)}
                onClick={incrementMockDrafts}
            />
            <p style={styles.createMockDraftSuggestion as React.CSSProperties}>No mock drafts? Create one.</p>
            <Button
                style={styles.createMockDraftButton}
                handleOnClick={() => {
                    navigate('/mock-drafts/create');
                }}
            >
                CREATE DRAFT
            </Button>
        </PageFrame>
    );
}

const styles = {
    createMockDraftButton: {
        backgroundColor: 'var(--gold)',
        color: 'var(--darkGrey)',
        width: '40%',
        marginLeft: '30%',
    },
    leftArrow: {
        position: 'absolute',
        top: '30%',
        left: '12%',
        color: 'var(--darkGrey)',
        fontSize: '75px',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease-in-out',
    },
    rightArrow: {
        position: 'absolute',
        top: '30%',
        right: '12%',
        color: 'var(--darkGrey)',
        fontSize: '75px',
        cursor: 'pointer',
        transition: 'opacity 0.3s ease-in-out',
    },
    createMockDraftSuggestion: {
        textAlign: 'center',
        marginTop: '15px',
    },
};
