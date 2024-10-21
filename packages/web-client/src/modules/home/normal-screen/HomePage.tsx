import React, { useState } from 'react';
import { TbChevronCompactLeft, TbChevronCompactRight } from 'react-icons/tb';
import { Button, PageFrame } from '../../shared';
import { LeaguesViewer } from './features/LeaguesViewer';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

export function HomePage() {
    const navigate = useNavigate();  // Initialize the useNavigate hook
    const [isLeftArrowHovered, setLeftArrowHovered] = useState(false);
    const [isRightArrowHovered, setRightArrowHovered] = useState(false);
    const [slideDirection, setSlideDirection] = useState<string | null>(null);
    const [mockDrafts, setMockDrafts] = useState([1, 2, 3]);
    const [draftIndex, setDraftIndex] = useState(0);

    const incrementMockDrafts = () => {
        const newIndex = (draftIndex + 1) % mockDrafts.length;
        setMockDrafts([1, 2, 3]);
        setSlideDirection('right');
        setDraftIndex(newIndex);
    };

    const decrementMockDrafts = () => {
        const newIndex = (draftIndex - 1 + mockDrafts.length) % mockDrafts.length;
        setSlideDirection('left');
        setDraftIndex(newIndex - 1);
    };

    return (
        <PageFrame>
            {/* FAQ Tab */}
            <a
                onClick={() => navigate('/faq')}  // Use navigate for internal routing
                style={styles.faqTab}
            >
                FAQ
            </a>

            <TbChevronCompactLeft
                style={{ ...styles.leftArrow, opacity: isLeftArrowHovered ? 0.5 : 1 } as React.CSSProperties}
                onMouseEnter={() => setLeftArrowHovered(true)}
                onMouseLeave={() => setLeftArrowHovered(false)}
                onClick={decrementMockDrafts}
            />
            <LeaguesViewer slideDirection={slideDirection} mockDraft={mockDrafts[draftIndex]} />
            <TbChevronCompactRight
                style={{
                    ...styles.rightArrow,
                    opacity: isRightArrowHovered ? 0.5 : 1,
                } as React.CSSProperties}
                onMouseEnter={() => setRightArrowHovered(true)}
                onMouseLeave={() => setRightArrowHovered(false)}
                onClick={incrementMockDrafts}
            />
            <p style={styles.createMockDraftSuggestion as React.CSSProperties}>
                Need practice? Use mock drafts.
            </p>
            <Button
                style={styles.createMockDraftButton}
                handleOnClick={() => {
                    navigate('/mock-drafts');
                }}
            >
                MOCK DRAFTS
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
    faqTab: {
        position: 'absolute',
        top: '10px',
        right: '20px',
        backgroundColor: 'var(--gold)',
        color: 'var(--darkGrey)',
        padding: '10px 15px',
        textDecoration: 'none',
        fontWeight: 'bold',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};