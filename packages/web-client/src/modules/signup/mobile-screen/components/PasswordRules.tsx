
interface Props {
    password: string;
}

export const PasswordRules = (props: Props) => {
    const { password } = props;

    const styles = {
        valid: {
            color: 'var(--brightGreen)',
            fontWeight: 'bold',
        },
        invalid: {
            color: 'red',
            fontWeight: 'normal',
        },
        list: {
            margin: '10px'
        }
    };

    return (
        <ul style={styles.list}>
            <li style={password.length > 8 ? styles.valid : styles.invalid}>Minimum of 8 characters</li>
            <li style={/[A-Z]/.test(password) ? styles.valid : styles.invalid}>At least one capital letter</li>
            <li style={/\d/.test(password) ? styles.valid : styles.invalid}>At least one number</li>
        </ul>
    );
};