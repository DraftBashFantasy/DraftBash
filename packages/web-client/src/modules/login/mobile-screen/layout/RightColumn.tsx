import React from 'react';
import { LoginForm } from '../features/LoginFormMobile';

export const RightColumn = () => {
    return (
        <div style={styles.rightColumn as React.CSSProperties}>
            <LoginForm />
        </div>
    );
};

const styles = {
    rightColumn: {
        boxShadow: '-10px 0px 10px rgba(0, 0, 0, 0.5)',
        width: '50%',
        marginLeft: 'auto',
        backgroundColor: 'var(--grey)',
        padding: '50px 60px 50px 60px',
        height: '100vh',
        overflowY: 'auto',
        minWidth: '500px'
    }
};
