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
        <div style={styles.container}>
            <h2 style={styles.header}>Your draft</h2>
            <ul style={{ ...styles.details, ...slidingStyles }}>
                <li style={styles.detail}>
                    Draft Type: <b style={styles.detailValue}>{mockDraft?.draftSettings.orderType}</b>
                </li>
                <li style={styles.detail}>
                    Scoring Type: <b style={styles.detailValue}>{mockDraft?.draftSettings.scoringType}</b>
                </li>
                <li style={styles.detail}>
                    Team count: <b style={styles.detailValue}>{mockDraft?.draftSettings.teamCount}</b>
                </li>
            </ul>
            <Button style={styles.enterButton} handleOnClick={() => {}}>
                ENTER DRAFT
            </Button>
        </div>
    );
};

const styles = {
    container: {
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
    header: {
        textAlign: 'center',
        color: 'white',
        fontSize: '45px',
        fontWeight: '500',
    } as React.CSSProperties,
    details: {
        alignItems: 'center',
        paddingTop: '2%',
        display: 'flex',
        flexDirection: 'column',
        height: '60%',
    } as React.CSSProperties,
    detail: {
        fontWeight: '600',
        width: '400px',
        fontSize: '23px',
        color: 'var(--darkGrey)',
    } as React.CSSProperties,
    detailValue: {
        fontWeight: '500',
        fontSize: '23px',
        color: 'white',
    } as React.CSSProperties,
    status: {
        fontWeight: '500',
        fontSize: '23px',
        color: 'var(--darkGreen)',
    } as React.CSSProperties,
    enterButton: {
        position: 'absolute',
        bottom: '25px',
        width: '50%',
        marginLeft: '25%',
        backgroundColor: 'var(--blue)',
        textAlign: 'center',
        color: 'white',
    } as React.CSSProperties,
};
