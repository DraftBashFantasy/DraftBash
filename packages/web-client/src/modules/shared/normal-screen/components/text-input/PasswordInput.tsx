import React, { useState } from 'react';

interface Props {
    placeholder: string;
    onChange(inputValue: string): void;
    value?: string;
}

interface TextInputStyles {
    padding: string;
    fontSize: string;
    width: string;
    height: string;
    border: string;
    borderRadius: string;
    boxShadow: string;
    outline: string;
    originalBorderColor: string;
    focus: {
        borderColor: string;
    };
}

export const PasswordInput: React.FC<Props> = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const { placeholder, onChange, value } = props;

    const styles: TextInputStyles = {
        padding: '10px',
        fontSize: '15px',
        width: '100%',
        height: '50px',
        border: `1px solid ${isFocused ? 'var(--blue)' : 'var(--mediumGrey)'}`,
        borderRadius: '4px',
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.1)',
        outline: 'none',
        originalBorderColor: 'var(--mediumGrey)',
        focus: {
            borderColor: 'var(--blue)',
        },
    };

    return (
        <input
            style={styles}
            type="password"
            spellCheck={false}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
    );
};