import { RightColumn } from "./layout/RightColumn";
import { LoginForm } from "./features/LoginFormMobile";

export const LoginPageMobile = () => {
    return (
        <div style={styles.loginPage}>
            <LoginForm />
        </div>
    );
};

const styles = {
    loginPage: {
        backgroundColor: 'var(--grey)',
        padding: '50px 60px 50px 60px',
        height: '100vh',
        overflowY: 'auto',
    }
};
