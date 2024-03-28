import { Link } from 'react-router-dom';

export function LoginHeader() {
    return (
        <h1 style={styles.loginHeader}>
            Login
            <Link to="/signup">Signup</Link>
        </h1>
    );
}

const styles = {
    loginHeader: {
        paddingBottom: '10px',
        fontSize: '35px',
        borderBottom: '1px solid var(--mediumGrey)',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};
