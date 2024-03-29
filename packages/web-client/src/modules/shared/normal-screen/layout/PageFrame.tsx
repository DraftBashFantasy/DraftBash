import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const PageFrame = (props: Props) => {
    return <div style={styles.pageFrame}>{props.children}</div>;
};

const styles = {
    pageFrame: {
        padding: '50px',
        backgroundColor: 'var(--lightGrey)',
        width: '100%',
        border: '1px solid var(--darkGrey)',
        borderTop: '10px solid var(--gold)',
        borderRadius: '10px 10px 0px 0px',
        height: 'calc(100%)',
        minWidth: '750px',
        position: 'relative',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
        overflow: 'auto'
    } as React.CSSProperties,
};
