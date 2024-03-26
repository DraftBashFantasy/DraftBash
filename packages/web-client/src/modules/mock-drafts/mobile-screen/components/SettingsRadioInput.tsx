import React from 'react';

interface Props {
    setValue: (item: string | number) => void;
    values: string[] | number[];
    label: string;
    defaultValue: string | number;
}

const SettingsRadioInput: React.FC<Props> = ({ setValue, values, label, defaultValue }) => {
    return (
        <div style={styles.settingsGroup}>
            <h5>{label}</h5>
            {values.map((value, index) => (
                <label style={styles.radioInput} key={index}>
                    <input
                        type="radio"
                        value={value}
                        name={label}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        defaultChecked={value === defaultValue}
                    />
                    {value}
                </label>
            ))}
        </div>
    );
};

const styles = {
    settingsGroup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    } as React.CSSProperties,
    radioInput: {
        display: 'flex',
        gap: '3px',
    }
};

export default SettingsRadioInput;
