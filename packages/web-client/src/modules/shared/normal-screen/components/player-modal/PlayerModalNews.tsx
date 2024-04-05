export const PlayerModalNews = () => {
    return (
        <div style={styles.container}>
            <h5 style={styles.title}>Recent News</h5>
            <p style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
            </p>
        </div>
    );
};

const styles = {
    title: {
        color: 'var(--darkGrey)',
        fontSize: '20px',
        marginBottom: '10px',
        fontWeight: '600',
        textAlign: 'left',
    } as React.CSSProperties,
    container: {
        height: '180px',
        backgroundColor: 'var(--silver)',
        borderRadius: '10px',
        padding: '10px',
    } as React.CSSProperties,
    text: {
        color: 'var(--mediumGrey)',
        fontSize: '15px',
        textAlign: 'left',
    } as React.CSSProperties,
};
