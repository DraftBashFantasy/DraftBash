import { RightColumn } from "../layout/RightColumn";

export const LoginPageMobile = () => {
    return (
        <div style={styles.loginPage}>
            <RightColumn />
        </div>
    );
};

const styles = {
    loginPage: {
        backgroundColor: 'var(--black)',
        display: 'flex',
        height: '100vh'
    },
};
