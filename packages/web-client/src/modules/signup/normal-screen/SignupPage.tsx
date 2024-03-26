import { RightColumn } from "./layout/RightColumn";
import { LeftColumn } from "./layout/LeftColumn";

export const SignupPage = () => {
    return (
        <div style={styles.signupPage}>
            <LeftColumn />
            <RightColumn />
        </div>
    );
};

const styles = {
    signupPage: {
        backgroundColor: 'var(--black)',
        display: 'flex',
        height: '100vh'
    }
};