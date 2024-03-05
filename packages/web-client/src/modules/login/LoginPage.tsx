import React from 'react';
import { RightColumn } from './layout/RightColumn';
import { LeftColumn } from './layout/LeftColumn';

export const LoginPage = () => {
    return (
        <div style={styles.loginPage}>
            <LeftColumn />
            <RightColumn />
        </div>
    );
};

const styles = {
    loginPage: {
        backgroundColor: 'var(--black)',
        display: 'flex',
        height: '100vh',
    },
};
