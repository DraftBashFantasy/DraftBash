import { Link } from 'react-router-dom';

export function MockDraftsButton() {
    return (
        <div style={styles.container}>
            <Link style={styles.mockDraftsButton} to="/mock-drafts">
                <p style={styles.label}>Mock Draft</p>
                <p style={styles.subLabel}>Practice drafting</p>
                <b style={styles.joinLabel}>PLAY</b>
            </Link>
        </div>
    );
}

const styles = {
    container: {
        width: '100%', // Take up the full width of the container
        display: 'flex', // Use flexbox
    },
    mockDraftsButton: {
        flex: '1', // Take up remaining space within the flex container
        background: 'var(--transparentBlue)',
        borderRadius: '15px',
        padding: '5px 10px 8px 30px',
        position: 'relative',
        textDecoration: 'none', // Ensure Link styles are preserved
    } as React.CSSProperties,
    label: {
        color: 'var(--silver)',
        fontSize: '14px',
        fontWeight: '600'
    },
    subLabel: {
        marginTop: '-5px',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '12px',
    },
    joinLabel: {
        color: 'var(--gold)',
        position: 'absolute',
        right: '16px',
        top: '12px',
        background: 'var(--transparentBlue)',
        padding: '7px 10px 0px 10px',
        height: '28px',
        fontSize: '11px',
        borderRadius: '15px',
    } as React.CSSProperties,
};