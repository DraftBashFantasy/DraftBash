import React from 'react';
import { Navbar } from '../features/Navbar';
import { Outlet } from 'react-router-dom';

export const PageLayout = () => {

    return (
        <div style={styles.pageLayout}>
            <Navbar />
            <Outlet />
        </div>
    );
};

const styles = {
    pageLayout: {
        background: 'linear-gradient(to top, var(--darkGold), var(--darkGrey))',
        height: '100vh',
        overflow: 'auto',
    } as React.CSSProperties,
};