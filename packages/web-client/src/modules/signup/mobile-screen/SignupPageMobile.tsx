import { RightColumn } from './layout/RightColumn';

export const SignupPage = () => {
    return (
        <div style={styles.signupPage}>
            <RightColumn />
        </div>
    );
};

const styles = {
    signupPage: {
        backgroundColor: 'var(--black)',
        display: 'flex',
        height: '100vh',
    },
};
