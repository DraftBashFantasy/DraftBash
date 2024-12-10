import React, { useEffect, useState } from 'react';
import { Button } from '../../../shared';
import { MockDraftResponse } from '../../../../../../contracts';

interface Props {
    slideDirection: string | null;
    mockDraft: MockDraftResponse | null;
}

export const MockDraftsViewer = (props: Props) => {
    const { slideDirection, mockDraft } = props;
    const [isSliding, setIsSliding] = useState(false);
    const [currentDraft, setCurrentDraft] = useState<MockDraftResponse | null>(mockDraft);

    useEffect(() => {
        if (slideDirection) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentDraft(mockDraft);
                setIsSliding(false);
            }, 250);
        }
    }, [mockDraft, slideDirection]);

    const slidingStyles = isSliding
        ? {
              transform: slideDirection === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
              transition: 'transform 0.3s ease-out',
              opacity: 0,
          }
        : {
              transform: 'translateX(0)',
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-in',
              opacity: 1,
          };

    return (
        <div style={styles.container}>
            {/* Mock Draft Text */}
            <div style={styles.mockDraftTextContainer}>
                <h1 style={styles.mockDraftText}>Mock Draft</h1>
            </div>

            <h2 style={styles.header}>Your Draft</h2>
            <div style={{ ...styles.detailsWrapper, ...slidingStyles }}>
                <ul style={styles.details}>
                    <li style={styles.detail}>
                        <span style={styles.label}>Draft Type:</span>
                        <span style={styles.detailValue}>{currentDraft?.draftSettings.orderType || 'N/A'}</span>
                    </li>
                    <li style={styles.detail}>
                        <span style={styles.label}>Scoring Type:</span>
                        <span style={styles.detailValue}>{currentDraft?.draftSettings.scoringType || 'N/A'}</span>
                    </li>
                    <li style={styles.detail}>
                        <span style={styles.label}>Team Count:</span>
                        <span style={styles.detailValue}>{currentDraft?.draftSettings.teamCount || 'N/A'}</span>
                    </li>
                </ul>
            </div>
            <Button style={styles.enterButton} handleOnClick={() => {}}>
                Enter Draft
            </Button>
        </div>
    );
};

const styles = {
    container: {
        margin: 'auto',
        padding: '20px',
        width: '90%',
        maxWidth: '700px',
        background: 'linear-gradient(135deg, #3b5998, #8b9dc3)',
        borderRadius: '12px',
         marginTop: ' 90px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    } as React.CSSProperties,
    mockDraftTextContainer: {
        marginTop: ' 90px',
        textAlign: 'center',
    position: 'absolute', // Allows precise positioning
    top: '-50px',         // Moves the text upwards relative to the parent container
    left: '50%',          // Centers horizontally
    transform: 'translateX(-50%)', // Ensures proper centering

    } as React.CSSProperties,
    mockDraftText: {
        fontSize: '48px', // Larger font size for visibility
        fontWeight: 'bold',
        color: 'var(--gold)', // Gold color for the text
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', // Subtle shadow
        letterSpacing: '4px', // Better spacing for readability
    } as React.CSSProperties,
    header: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    } as React.CSSProperties,
    detailsWrapper: {
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
    } as React.CSSProperties,
    details: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    } as React.CSSProperties,
    detail: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 15px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
    } as React.CSSProperties,
    label: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#f0f0f0',
    } as React.CSSProperties,
    detailValue: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#ffffff',
    } as React.CSSProperties,
    enterButton: {
        padding: '12px 20px',
        backgroundColor: 'var(--gold)',
        color: '#ffffff',
        fontWeight: '600',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        width: '100%',
        textAlign: 'center',
    } as React.CSSProperties,
};