import React, { useState } from 'react';
import { TextInput } from '../../shared';
import { RoundedButton } from '../../shared';
import { SignupHeader } from '../components/SignupHeader';
import { PasswordInput } from '../../shared';
import { PasswordRules } from '../components/PasswordRules';
import { useSignup } from '../hooks/useSignup';

export const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { handleSignup, signupError } = useSignup();

    const handleLoginClick = async (event) => {
        event.preventDefault();
        await handleSignup(username, email, password, confirmPassword);
    };

    return (
        <form style={styles.loginForm as React.CSSProperties}>
            <SignupHeader />
            <TextInput placeholder="Username" onChange={setUsername} />
            <TextInput placeholder="Email" onChange={setEmail} />
            <PasswordInput placeholder="Password" onChange={setPassword} />
            <PasswordInput placeholder="Confirm Password" onChange={setConfirmPassword} />
            <PasswordRules password={password} />
            {signupError && <p style={styles.error as React.CSSProperties}>{signupError}</p>}
            <RoundedButton
                handleOnClick={(e) => handleLoginClick(e)}
                style={styles.loginButton}
            >
                Sign up
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
        backgroundColor: "var(--blue)",
        color: "white"
    },
    error: {
        color: 'red',
        position: 'absolute',
        top: '480px',
    },
};