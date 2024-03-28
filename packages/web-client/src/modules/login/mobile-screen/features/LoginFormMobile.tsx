import React, { useState } from 'react';
import { Button, PasswordInput, TextInput } from '../../../shared';
import { LoginHeader } from '../components/LoginHeaderMobile';
import { useLogin } from '../../hooks/useLogin';

export const LoginForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, loginError } = useLogin();

    const handleLoginClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        await handleLogin(usernameOrEmail, password);
    };

    return (
        <form style={styles.loginForm as React.CSSProperties}>
            <LoginHeader />
            <TextInput placeholder="Username or email" onChange={setUsernameOrEmail} />
            <PasswordInput placeholder="Password" onChange={setPassword} />
            {loginError && <p style={styles.error as React.CSSProperties}>{loginError}</p>}
            <Button handleOnClick={(e) => handleLoginClick(e)} style={styles.loginButton}>
                Log In
            </Button>
        </form>
    );
};

const styles = {
    loginForm: {
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
    },
    loginButton: {
        marginTop: '25px',
        backgroundColor: 'var(--gold)',
        color: 'white',
        width: '100%',
        borderRadius: '5px'
    },
    error: {
        color: 'red',
        position: 'absolute',
        top: '260px',
    },
};
