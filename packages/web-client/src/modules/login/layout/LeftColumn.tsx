import React from 'react';

export const LeftColumn = () => {
    return (
        <div style={styles.leftColumn as React.CSSProperties}>
            <h3 style={styles.draftbashLogo as React.CSSProperties}>DraftBash</h3>
        </div>
    );
};

const styles = {
    leftColumn: {
        width: '50%',
        paddingTop: '15%',
        background: 'linear-gradient(to top, var(--indigo), var(--darkGrey))',
    },
    draftbashLogo: {
        color: 'white',
        fontSize: '45px',
        textAlign: 'center',
        borderBottom: '2px solid var(--gold)',
        width: '350px',
        margin: 'auto'
    },
};
