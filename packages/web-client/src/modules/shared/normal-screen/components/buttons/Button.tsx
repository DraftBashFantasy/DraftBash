import React, { useState } from 'react';

interface Props {
    handleOnClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const Button = (props: Props) => {
    const { handleOnClick, children, style } = props;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={styles}>
            <button
                className={`rounded-button`}
                style={{
                    ...styles.button,
                    ...(isHovered && styles.hover),
                    ...style,
                }}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                onClick={handleOnClick}
            >
                {children}
            </button>
        </div>
    );
};

const styles = {
    border: 'none',

    button: {
        border: 'none',
        height: '50px',
        outline: 'none',
        borderRadius: '25px',
        padding: '10px 60px 10px 60px',
        cursor: 'pointer',
        transition: '0.3s',
        fontSize: '18px',
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.1)',
        fontWeight: '500',
        whiteSpace: 'nowrap'
    },

    hover: {
        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
    },
};