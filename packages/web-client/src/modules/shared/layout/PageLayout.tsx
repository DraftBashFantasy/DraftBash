import React from 'react';
import { Navbar } from '../features/Navbar';
import { Outlet } from 'react-router-dom';

export const PageLayout = () => {
    const styles: React.CSSProperties = {
        background: 'linear-gradient(to top, var(--darkGold), var(--darkGrey))',
        height: '100vh',
        overflow: 'auto',
    };

    return (
        <div style={styles}>
            <Navbar />
            <Outlet />
        </div>
    );
};