export const PlayerModalAveragesSection = () => {
    return (
        <div style={styles.container}>
            <h5 style={styles.title}>Season Averages</h5>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>MPG</th>
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
