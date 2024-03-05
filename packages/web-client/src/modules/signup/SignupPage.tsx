import React from "react";
import { RightColumn } from "../signup";
import { LeftColumn } from "../signup";

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
        height: '100vh',
    }
};