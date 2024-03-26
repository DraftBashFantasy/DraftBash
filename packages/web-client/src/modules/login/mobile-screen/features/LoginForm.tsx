import React, { useState } from 'react';
import { RoundedButton, PasswordInput, TextInput } from '../../../shared';
import { LoginHeader } from '../components/LoginHeader';
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
            <RoundedButton handleOnClick={(e) => handleLoginClick(e)} style={styles.loginButton}>
                Log In
            </RoundedButton>
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
        width: '50%',
        marginLeft: '25%',
        marginTop: '25px',
        backgroundColor: 'var(--gold)',
        color: 'white',
    },
    error: {
        color: 'red',
        position: 'absolute',
        top: '260px',
    },
};
