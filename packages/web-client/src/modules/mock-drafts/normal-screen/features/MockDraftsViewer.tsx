import React, { useEffect, useState } from 'react';
import { Button } from '../../../shared';

interface Props {
    slideDirection: string | null;

    mockDraft: unknown;
}

export const MockDraftsViewer = (props: Props) => {
    const { slideDirection, mockDraft } = props;
    const [isSliding, setIsSliding] = useState(false);

    useEffect(() => {
        if (slideDirection) {
            setIsSliding(true);
            setTimeout(() => setIsSliding(false), 250);
        }
    }, [mockDraft]);

    let transformValue = '0';
    if (isSliding) {
        if (slideDirection === 'left') {
            transformValue = '-100%';
        } else if (slideDirection === 'right') {
            transformValue = '100%';
        }
    }

    const slidingStyles = {
        transform: transformValue,
        transition: isSliding ? 'transform 0.5s ease-out' : 'none',
        overflow: 'hidden',
    };

    return (
        <div style={styles.mockDraftsContainer}>
            <h2 style={styles.draftHeader}>Your Mock Draft</h2>
            <ul style={{ ...styles.details, ...slidingStyles }}>
                <li style={styles.draftDetail}>
                    Draft Type: <b style={styles.draftDetailValue}>linear</b>
                </li>
                <li style={styles.draftDetail}>
                    Scoring Type: <b style={styles.draftDetailValue}>points</b>
                </li>
                <li style={styles.draftDetail}>
                    Team count: <b style={styles.draftDetailValue}>8</b>
                </li>
                <li style={styles.draftDetail}>
                    Status: <b style={styles.draftStatus}>not started</b>
                </li>
            </ul>
            <Button style={styles.joinButton} handleOnClick={() => {}}>
                JOIN DRAFT
            </Button>
        </div>
    );
};

const styles = {
    mockDraftsContainer: {
        margin: 'auto',
        background: 'linear-gradient(to top, var(--brightBlue), var(--dullIndigo))',
        width: '60%',
        marginTop: '5%',
        height: '60%',
        border: '1px solid var(--darkGrey)',
        borderRadius: '10px',
        padding: '10px',
        position: 'relative',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
    } as React.CSSProperties,
    draftHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: '30px',
        fontWeight: '500',
    } as React.CSSProperties,
    details: {
        padding: '50px',
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
        justifyContent: 'space-around',
    } as React.CSSProperties,
    draftDetail: {
        fontWeight: '600',
        fontSize: '20px',
        color: 'var(--darkGrey)',
    } as React.CSSProperties,
    draftDetailValue: {
        fontWeight: '500',
        fontSize: '20px',
        color: 'white',
    } as React.CSSProperties,
    draftStatus: {
        fontWeight: '500',
        fontSize: '20px',
        color: 'var(--darkGreen)',
    } as React.CSSProperties,
    joinButton: {
        position: 'absolute',
        bottom: '25px',
        width: '50%',
        marginLeft: '25%',
        backgroundColor: 'var(--blue)',
        color: 'white',
    } as React.CSSProperties,
};

export default MockDraftsViewer;
