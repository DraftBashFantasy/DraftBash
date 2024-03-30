import React, { useState } from 'react';

interface Props {
    value: string | number;
    values: string[] | number[];
    title: string;
    width: number;
    setValue: (value: string | number) => void;
}

export function DraftSettingMobile(props: Props) {

    return (
        <div>
            <div>
                <h5 style={styles.settingTitle}>{props.title}</h5>
                <ul style={styles.settingList}>
                    {props.values.map((item, index) => (
                        <li
                            key={index}
                            style={
                                props.value === item
                                    ? { ...styles.settingItemSelected, width: props.width }
                                    : { ...styles.settingItem, width: props.width }
                            }
                            onClick={() => props.setValue(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const styles = {
    settingTitle: {
        color: 'var(--silver)',
        fontSize: '12px',
        marginBottom: '5px',
    },
    settingList: {
        display: 'flex',
        gap: '10px',
        overflow: 'auto'
    },
    settingItem: {
        backgroundColor: 'var(--transparentBlue)',
        padding: '8px 5px 5px 5px',
        height: '40px',
        borderRadius: '30px',
        textAlign: 'center',
        color: 'var(--silver)',
    },
    settingItemSelected: {
        backgroundColor: 'var(--indigo)',
        padding: '8px 5px 5px 5px',
        height: '40px',
        borderRadius: '30px',
        textAlign: 'center',
        color: 'var(--silver)',
    },
};
