import { PlayerResponse } from "../../../../../../contracts";
import { PlayerModal } from "../../../shared";

interface Props {
    players: PlayerResponse[]
}

export const PlayerInfoTable = (props: Props) => {
    return (
        <ul>
            {props.players.map((player, index) => (
                <table key={index} style={{ overflow: 'auto' }}>
                    <thead>
                        <tr>
                            <th style={styles.tableHeader}>Rank</th>
                            <th
                                style={{
                                    ...styles.tableHeader,
                                    ...{ textAlign: 'left', width: '25%', minWidth: '260px' },
                                }}
                            >
                                Player
                            </th>
                            <th
                                style={{
                                    ...styles.tableHeader,
                                    ...{
                                        textAlign: 'left',
                                        borderLeft: '1px solid var(--grey)',
                                        borderRight: '1px solid var(--grey)',
                                        width: '20%',
                                        minWidth: '200px',
                                    },
                                }}
                            >
                                Year
                            </th>
                            <th style={styles.tableHeader}>GP</th>
                            <th style={styles.tableHeader}>MIN</th>
                            <th style={styles.tableHeader}>PTS</th>
                            <th style={styles.tableHeader}>AST</th>
                            <th style={styles.tableHeader}>REB</th>
                            <th style={styles.tableHeader}>BLK</th>
                            <th style={styles.tableHeader}>STL</th>
                            <th style={styles.tableHeader}>TO</th>
                            <th style={styles.tableHeader}>FG%</th>
                            <th style={styles.tableHeader}>FT%</th>
                            <th style={styles.tableHeader}>3PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ ...styles.tableDataStatistic, ...{ textAlign: 'right' } }}>{index + 1}</td>
                            <td style={{ ...styles.tableDataStatistic, ...{ position: 'relative' } }}>
                                <PlayerModal player={player} />
                            </td>
                            <td
                                style={{
                                    ...styles.tableDataStatistic,
                                    ...{
                                        textAlign: 'left',
                                        borderLeft: '1px solid var(--grey)',
                                        borderRight: '1px solid var(--grey)',
                                        color: 'var(--darkGrey)',
                                        fontWeight: '600',
                                    },
                                }}
                            >
                                2023 Season Averages
                            </td>
                            <td style={styles.tableDataStatistic}>{player.seasonTotals?.gamesPlayed}</td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.minutes / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.points / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.assists / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.rebounds / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.blocks / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.steals / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.turnovers / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {`${(
                                    100 * player.seasonTotals?.fieldGoalsMade
                                    / player.seasonTotals?.fieldGoalsAttempted
                                ).toFixed(1)}`}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {`${(100 * player.seasonTotals?.freeThrowsMade /
                                    player.seasonTotals?.freeThrowsAttempted).toFixed(1)}`}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonTotals?.threesMade / player.seasonTotals?.gamesPlayed).toFixed(1)}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td
                                style={{
                                    ...styles.tableDataProjection,
                                    ...{
                                        textAlign: 'left',
                                        borderLeft: '1px solid var(--grey)',
                                        borderRight: '1px solid var(--grey)',
                                        color: 'var(--darkGrey)',
                                        fontWeight: '600',
                                    },
                                }}
                            >
                                2024 Projections
                            </td>
                            <td style={styles.tableDataStatistic}>{player.seasonProjections?.gamesPlayed}</td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.minutes / player.seasonProjections?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.points / player.seasonProjections?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.assists / player.seasonProjections?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.rebounds / player.seasonProjections?.gamesPlayed).toFixed(
                                    1
                                )}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.blocks / player.seasonProjections?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.steals / player.seasonProjections?.gamesPlayed).toFixed(1)}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.turnovers / player.seasonProjections?.gamesPlayed).toFixed(
                                    1
                                )}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {`${(100 * player.seasonProjections?.fieldGoalPercentage).toFixed(1)}`}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {`${(100 * player.seasonProjections?.freeThrowPercentage).toFixed(1)}`}
                            </td>
                            <td style={styles.tableDataStatistic}>
                                {(player.seasonProjections?.threesMade / player.seasonProjections?.gamesPlayed).toFixed(
                                    1
                                )}
                            </td>
                        </tr>
                        <tr>
                            <td style={{ borderBottom: '1px solid var(--grey)' }}></td>
                            <td style={{ borderBottom: '1px solid var(--grey)' }}></td>
                            <td colSpan={12} style={styles.news}>
                                <p style={{ color: 'var(--darkGrey)', fontWeight: '600', fontSize: '15px' }}>
                                    Fantasy Outlook:
                                </p>
                                <p style={{ fontSize: '12px', color: 'var(--mediumGrey)' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </ul>
    );
};

const styles = {
    tableDataStatistic: {
        padding: '3px 10px 3px 10px',
        textAlign: 'center',
        color: 'var(--mediumGrey)',
        fontSize: '15px',
    } as React.CSSProperties,
    tableDataProjection: {
        padding: '3px 10px 3px 10px',
        textAlign: 'center',
        color: 'var(--mediumGrey)',
        fontSize: '15px',
        borderTop: '1px solid var(--lightGrey)'
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
    news: {
        borderTop: '1px solid var(--grey)',
        padding: '5px 10px 5px 10px',
        borderLeft: '1px solid var(--grey)',
        borderBottom: '1px solid var(--grey)'
    } as React.CSSProperties,
};
