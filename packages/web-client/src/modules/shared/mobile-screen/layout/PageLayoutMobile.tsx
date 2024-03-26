import React from 'react';
import { NavbarMobile } from '../features/NavbarMobile';
import { Outlet } from 'react-router-dom';

export const PageLayoutMobile = () => {
    return (
        <div style={styles.pageLayout}>
            <NavbarMobile />
            <Outlet />
        </div>
    );
};

const styles = {
    pageLayout: {
        background: 'var(--lightGrey)',
        height: '100vh',
        overflow: 'auto'
    } as React.CSSProperties,
};
