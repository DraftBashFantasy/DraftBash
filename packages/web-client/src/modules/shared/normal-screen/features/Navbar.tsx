import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

// Title Component for "DraftBash"
const DraftBashTitle = () => (
    <h1 style={styles.draftBashTitle}>DraftBash</h1>
);

export const Navbar = () => {
    const { logout } = useAuth();

    const handleMouseOver = (e: { currentTarget: { style: any; }; }) => {
        Object.assign(e.currentTarget.style, styles.option, styles.linkHover);
    };

    const handleMouseOut = (e: { currentTarget: { style: any; }; }) => {
        Object.assign(e.currentTarget.style, styles.option);
    };

    return (
        <div style={styles.navbar}>
            {/* "DraftBash" title in top-left corner */}
            <DraftBashTitle />

            {/* Links and logout button wrapped in a container on the right */}
            <div style={styles.navLinksContainer}>
                <Link to="/" style={styles.option} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Home
                </Link>
                <Link to="/players" style={styles.option} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Players
                </Link>
                <Link to="/mock-drafts" style={styles.option} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    Mock Drafts
                </Link>
                <FaSignOutAlt
                    style={styles.logout}
                    onClick={logout}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />
            </div>
        </div>
    );
};

const styles = {
    navbar: {
        backgroundColor: 'var(--indigo)',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between', // Ensures space is between elements
        alignItems: 'center',
        padding: '0px 30px', // Adjusted for a cleaner layout
        boxShadow: '0px 5px 5px rgba(0, 0, 0, .5)',
        borderBottom: '1px solid var(--gold)',
    },
    draftBashTitle: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'transparent',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        background: 'linear-gradient(90deg, #ff6b6b, #f9a825, #ffde59)',  // Gradient effect
        WebkitBackgroundClip: 'text',  // Ensure the gradient applies to text
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',  // Subtle shadow for depth
    },
    navLinksContainer: {
        display: 'flex',
        gap: '20px',  // Space between links
        alignItems: 'center', // Align logout and links
    },
    logout: {
        cursor: 'pointer',
        color: 'white',
        height: '100%',
        padding: '0px 15px',
        width: '50px',
    },
    option: {
        lineHeight: '50px',
        textDecoration: 'none',
        height: '100%',
        padding: '0px 15px',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'background-color 0.3s ease',
    },
    linkHover: {
        backgroundColor: 'var(--transparentBlue)',
    },
};