import { PlayerResponse } from "../../../../../../../contracts";

interface Props {
    player: PlayerResponse;
}

export const PlayerModalAveragesSection = (props: Props) => {
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
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.minutes / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.points / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.assists / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.rebounds / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.blocks / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.steals / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.turnovers / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
                        <td style={styles.tableData}>
                            {`${(100 * props.player.seasonTotals?.fieldGoalPercentage).toFixed(1)}`}
                        </td>
                        <td style={styles.tableData}>
                            {`${(100 * props.player.seasonTotals?.freeThrowPercentage).toFixed(1)}`}
                        </td>
                        <td style={styles.tableData}>
                            {(props.player.seasonTotals?.threesMade / props.player.seasonTotals?.gamesPlayed).toFixed(1)}
                        </td>
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
