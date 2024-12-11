import React, { useEffect, useState } from 'react';
import { Button } from '../../../shared';

interface Props {
    slideDirection: string | null;
    mockDraft: unknown;
}

export const LeaguesViewer = (props: Props) => {
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
            <h2 style={styles.header}>Your league</h2>
            <ul style={{ ...styles.details, ...slidingStyles }}>
                <li style={styles.detail}>
                    <span style={styles.label}>League Type:</span>
                    <span style={styles.detailValue}>H2H</span>
                </li>
                <li style={styles.detail}>
                    <span style={styles.label}>Scoring Type:</span>
                    <span style={styles.detailValue}>points</span>
                </li>
                <li style={styles.detail}>
                    <span style={styles.label}>Team Count:</span>
                    <span style={styles.detailValue}>8</span>
                </li>
                <li style={styles.detail}>
                    <span style={styles.label}>Status:</span>
                    <span style={styles.detailValue}>not started</span>
                </li>
            </ul>
            <Button style={styles.enterButton} handleOnClick={() => {}}>
                ENTER LEAGUE
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
        marginTop: '90px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
    } as React.CSSProperties,
    header: {
        fontSize: '24px',
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
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
        fontWeight: 'bold', // Bold labels
        color: '#f0f0f0',
    } as React.CSSProperties,
    detailValue: {
        fontSize: '16px',
        fontWeight: 'bold', // Bold values
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