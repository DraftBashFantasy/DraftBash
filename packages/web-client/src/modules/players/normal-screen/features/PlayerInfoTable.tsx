import { PlayerModal } from "../../../shared";

export const PlayerInfoTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th style={styles.tableHeader}>Rank</th>
                    <th style={{ ...styles.tableHeader, ...{ textAlign: 'left', width: '25%' } }}>Player</th>
                    <th
                        style={{
                            ...styles.tableHeader,
                            ...{
                                textAlign: 'left',
                                borderLeft: '1px solid var(--grey)',
                                borderRight: '1px solid var(--grey)',
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
                    <td style={{ ...styles.tableDataStatistic, ...{ textAlign: 'right' } }}>1</td>
                    <td style={styles.tableDataStatistic}>
                        <PlayerModal />
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
                        2023 Statistics
                    </td>
                    <td style={styles.tableDataStatistic}>45</td>
                    <td style={styles.tableDataStatistic}>36.5</td>
                    <td style={styles.tableDataStatistic}>25.4</td>
                    <td style={styles.tableDataStatistic}>7.9</td>
                    <td style={styles.tableDataStatistic}>7.9</td>
                    <td style={styles.tableDataStatistic}>0.9</td>
                    <td style={styles.tableDataStatistic}>1.1</td>
                    <td style={styles.tableDataStatistic}>51.3</td>
                    <td style={styles.tableDataStatistic}>69.2</td>
                    <td style={styles.tableDataStatistic}>2.3</td>
                    <td style={styles.tableDataStatistic}>2.3</td>
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
                    <td style={styles.tableDataProjection}>45</td>
                    <td style={styles.tableDataProjection}>36.5</td>
                    <td style={styles.tableDataProjection}>25.4</td>
                    <td style={styles.tableDataProjection}>7.9</td>
                    <td style={styles.tableDataProjection}>7.9</td>
                    <td style={styles.tableDataProjection}>0.9</td>
                    <td style={styles.tableDataProjection}>1.1</td>
                    <td style={styles.tableDataProjection}>51.3</td>
                    <td style={styles.tableDataProjection}>69.2</td>
                    <td style={styles.tableDataProjection}>2.3</td>
                    <td style={styles.tableDataProjection}>2.3</td>
                </tr>
                <tr>
                    <td style={{ borderBottom: '1px solid var(--grey)' }}></td>
                    <td style={{ borderBottom: '1px solid var(--grey)' }}></td>
                    <td colSpan={12} style={styles.news}>
                        <p style={{ color: 'var(--darkGrey)', fontWeight: '600', fontSize: '15px' }}>
                            Fantasy Outlook:
                        </p>
                        <p style={{ fontSize: '12px', color: 'var(--mediumGrey)' }}>
                            Jokic is the reigning NBA Finals MVP, and before that the two-time NBA MVP, but he has been
                            the fantasy basketball MVP for all three of those seasons. He has been the most consistent,
                            unstoppable force in the league, averaging 26.0 PPG, 12.2 RPG, 8.7 APG over the last three
                            campaigns. He increased his distribution last season, coming within two tenths of an assist
                            of averaging a triple-double in truth, and with the way he dominated the postseason it is
                            clear he actually has even a higher gear he can reach when called upon. And remarkably,
                            Jokic is just now reaching his peak prime years at 28 years old...so, despite holding the
                            crown, he still has upside.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
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
        color: 'var(--darkGrey)',
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
