import React from 'react';

interface Props {
    children: React.ReactNode;
}

export const PageFrame = (props: Props) => {
    return <div style={styles.pageFrame}>{props.children}</div>;
};

const styles = {
    pageFrame: {
        backgroundColor: 'var(--silver)',
        padding: '20px',
        marginTop: '50px',
        width: '60%',
        border: '1px solid var(--darkGrey)',
        borderRadius: '15px',
        marginLeft: '20%',
        height: 'calc(100% - 150px)',
        minHeight: '500px',
        minWidth: '750px',
        position: 'relative',
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)'
    } as React.CSSProperties,
};
