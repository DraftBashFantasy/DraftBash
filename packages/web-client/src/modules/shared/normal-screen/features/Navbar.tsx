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
            <Link
                to="/mock-drafts"
                style={styles.option}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Mock Drafts
            </Link>
            <FaSignOutAlt style={styles.logout} onClick={logout} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
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
        padding: '5px 50px 5px 50px',
        gap: '30px',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, .5)',
        borderBottom: '1px solid var(--gold)',
    },
    logout: {
        cursor: 'pointer',
        color: 'white',
        height: '100%',
        padding: '0px 10px 0px 10px',
        width: '40px'
    },
    option: {
        lineHeight: '40px',
        textDecoration: 'none',
        height: '100%',
        padding: '0px 10px 0px 10px',
        borderRadius: '10px',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: 'background-color 0.3s ease',
    },
    linkHover: {
        backgroundColor: 'var(--transparentGrey)',
    }
};