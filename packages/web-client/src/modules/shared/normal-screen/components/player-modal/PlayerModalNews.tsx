export const PlayerModalNews = () => {
    return (
        <div style={styles.container}>
            <h5 style={styles.title}>Recent News</h5>
            <p style={styles.text}>
                Jokic (hip/wrist) is probable for Sunday's game against the Cavaliers. Spin: Jokic is battling
                inflammation in his left hip and his right wrist. He looked noticeably uncomfortable Friday against
                Minnesota, yet still managed to score 32 points with 10 rebounds, five assists, two steals and one
                block.
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
