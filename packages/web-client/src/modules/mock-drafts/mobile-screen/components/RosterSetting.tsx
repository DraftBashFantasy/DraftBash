import React, { useState } from 'react';

interface Props {
    value: number;
    upperBound: number;
    lowerBound: number;
    title: string;
    setValue: (value: number) => void;
}

export function RosterSetting (props: Props) {

    return (
        <div style={styles.setting}>
            <p style={styles.title}>{props.title}</p>
            <div style={styles.buttons}>
                <b
                    style={styles.decrement}
                    onClick={() => {
                        if (props.value > props.lowerBound) {
                            props.setValue(props.value - 1);
                        }
                    }}
                >
                    -
                </b>
                <b style={styles.value}>{props.value}</b>
                <b
                    style={styles.increment}
                    onClick={() => {
                        if (props.value < props.upperBound) {
                            props.setValue(props.value + 1);
                        }
                    }}
                >
                    +
                </b>
            </div>
        </div>
    );
}

const styles = {
    setting: {
        display: 'flex',
        height: '40px',
        justifyContent: 'space-between',
        borderBottom: '2px solid var(--brightBlack)',
        alignItems: 'center'
    },
    title: {
        color: 'var(--silver)',
        fontSize: '15px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: 'calc(100% - 100px)', // Adjust as needed
    },
    increment: {
        color: 'var(--brightGreen)',
        fontSize: '20px',
        backgroundColor: 'rgb(100, 100, 120)',
        height: '20px',
        width: '20px',
        textAlign: 'center',
        lineHeight: '20px',
        borderRadius: '50%',
        fontWeight: '500',
    },
    decrement: {
        color: 'rgb(255, 0, 0)',
        fontSize: '20px',
        backgroundColor: 'rgb(100, 100, 120)',
        height: '20px',
        width: '20px',
        textAlign: 'center',
        lineHeight: '20px',
        borderRadius: '50%',
        fontWeight: '500',
    },
    value: {
        color: 'var(--silver)',
        fontWeight: '500',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '20px',
        alignItems: 'center',
        width: '75px',
        height: '30px',
        backgroundColor: 'var(--transparentBlue)',
        padding: '5px',
    },
};