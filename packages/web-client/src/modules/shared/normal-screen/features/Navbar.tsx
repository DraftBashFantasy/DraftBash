import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

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
            <Link to="/players" style={styles.option} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Players
            </Link>
            <Link to="/mock-drafts" style={styles.option} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Mock Drafts
            </Link>
            <Link to="/" style={styles.option} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                Home
            </Link>
            <FaSignOutAlt
                style={styles.logout}
                onClick={logout}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
        </div>
    );
};

const styles = {
    navbar: {
        backgroundColor: 'var(--indigo)',
        height: '50px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0px 50px 0px 50px',
        gap: '30px',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, .5)',
        borderBottom: '1px solid var(--gold)',
    },
    logout: {
        cursor: 'pointer',
        color: 'white',
        height: '100%',
        padding: '0px 15px 0px 15px',
        width: '50px'
    },
    option: {
        lineHeight: '50px',
        textDecoration: 'none',
        height: '100%',
        padding: '0px 15px 0px 15px',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'background-color 0.3s ease',
    },
    linkHover: {
        backgroundColor: 'var(--transparentBlue)',
    }
};