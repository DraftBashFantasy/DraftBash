

export const PlayerModalGamelogs = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h5 style={styles.title}>Gamelog</h5>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <p style={styles.dateButton}>2023-24</p>
                    <p style={styles.dateButton}>2022-23</p>
                </div>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>DATE</th>
                        <th style={styles.tableHeader}>OPP</th>
                        <th style={styles.tableHeader}>MIN</th>
                        <th style={styles.tableHeader}>PTS</th>
                        <th style={styles.tableHeader}>REB</th>
                        <th style={styles.tableHeader}>AST</th>
                        <th style={styles.tableHeader}>STL</th>
                        <th style={styles.tableHeader}>BLK</th>
                        <th style={styles.tableHeader}>TO</th>
                        <th style={styles.tableHeader}>FG%</th>
                        <th style={styles.tableHeader}>FT%</th>
                        <th style={styles.tableHeader}>3PM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={styles.tableData}>3/29</td>
                        <td style={styles.tableData}>MIN</td>
                        <td style={styles.tableData}>36.5</td>
                        <td style={styles.tableData}>25.4</td>
                        <td style={styles.tableData}>7.9</td>
                        <td style={styles.tableData}>7.9</td>
                        <td style={styles.tableData}>1.1</td>
                        <td style={styles.tableData}>0.6</td>
                        <td style={styles.tableData}>3.7</td>
                        <td style={styles.tableData}>51.3%</td>
                        <td style={styles.tableData}>75.4%</td>
                        <td style={styles.tableData}>2.3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    dateButton: {
        color: 'var(--darkGrey)',
        fontSize: '15px',
        fontWeight: '600',
    } as React.CSSProperties,
    title: {
        color: 'var(--darkGrey)',
        fontSize: '20px',
        marginBottom: '10px',
        fontWeight: '600',
        textAlign: 'left',
    } as React.CSSProperties,
    table: {
        width: '100%',
    } as React.CSSProperties,
    container: {
        backgroundColor: 'var(--silver)',
        borderRadius: '10px',
        padding: '10px 10px 20px 10px',
    } as React.CSSProperties,
    tableData: {
        textAlign: 'center',
        color: 'var(--mediumGrey)',
        fontSize: '15px',
        borderBottom: '1px solid var(--grey)',
        padding: '3px 10px 3px 10px',
    } as React.CSSProperties,
    tableHeader: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '15px',
        color: 'var(--darkGrey)',
        borderBottom: '1px solid var(--grey)',
        borderTop: '1px solid var(--grey)',
        padding: '3px 10px 3px 10px',
    } as React.CSSProperties,
};
