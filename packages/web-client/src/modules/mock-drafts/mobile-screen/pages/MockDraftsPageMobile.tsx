
export function MockDraftsPageMobile() {

    const drafts = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <>
            <div style={styles.header}>
                <h1 style={styles.pageTitle}>Mock Drafts</h1>
                <p style={styles.headerSubtext}>Join a mock draft to practice drafting against other users.</p>
            </div>
            <ul style={styles.draftList}>
                {drafts.map((item, index) => (
                    <li style={styles.draftItem}>
                        <b style={styles.draftTitle}>10-Team Points Snake</b>
                        <p>
                            <i style={styles.draftSetting}>1 PG,</i> <i style={styles.draftSetting}>1 SG,</i>{' '}
                            <i style={styles.draftSetting}>1 SF,</i> <i style={styles.draftSetting}>1 PF,</i>{' '}
                            <i style={styles.draftSetting}>1 C</i>
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}

const styles = {
    header: {
        background: 'linear-gradient(to top, var(--indigo), var(--dullIndigo))',
        height: '25%',
        padding: '20px'
    },
    pageTitle: {
        color: 'var(--silver)',
        fontSize: '25px',
    },
    headerSubtext: {
        color: 'var(--silver)',
        fontSize: '15px',
    },
    draftTitle: {
        color: 'var(--silver)',
        fontSize: '15px',
    },
    draftSetting: {
        color: 'var(--grey)',
        fontSize: '10px'
    },
    draftItem: {
        backgroundColor: 'var(--transparentBlue)',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px'
    },
    draftList: {
        backgroundColor: 'var(--mediumGrey)',
        height: 'calc(75% - 50px)',
        borderRadius: '10px',
        padding: '10px',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
};
