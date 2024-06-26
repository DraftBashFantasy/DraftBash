import React from 'react';
import { Navbar } from '../features/Navbar';
import { Outlet } from 'react-router-dom';

export const PageLayout = () => {

    return (
        <div style={styles.pageLayout}>
            <Navbar />
            <div style={styles.pageContent}>
                <Outlet />
            </div>
        </div>
    );
};

const styles = {
    pageLayout: {
        background: 'linear-gradient(to top, var(--darkGold), var(--darkGrey))',
        height: '100vh',
        overflow: 'auto',
    } as React.CSSProperties,
    pageContent: {
        padding: '50px 50px 0px 50px',
        width: '100%',
        height: 'calc(100% - 50px)'
    }
};