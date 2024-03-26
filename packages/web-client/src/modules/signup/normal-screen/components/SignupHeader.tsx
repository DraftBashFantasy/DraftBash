import { Link } from 'react-router-dom';

export const SignupHeader = () => {
    return (
        <h1 style={styles.signupHeader}>
            Signup
            <Link to="/login">
                Login
            </Link>
        </h1>
    );
};

const styles = {
    signupHeader: {
        paddingBottom: '10px',
        fontSize: '35px',
        borderBottom: '1px solid var(--mediumGrey)',
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    }
};