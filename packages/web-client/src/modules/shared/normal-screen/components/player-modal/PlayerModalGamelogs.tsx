import React, { useEffect } from 'react';
import { GamelogResponse } from '../../../../../../../contracts';

interface Props {
    gamelogs: GamelogResponse[];
}

export const PlayerModalGamelogs = (props: Props) => {
    const formatDate = (date: string) => {
        const dateArray = date.split('-');
        const month = dateArray[1];
        const day = dateArray[2];
        return `${month}/${day}`;
    };

    const getColorForValue = (value: number | string, ranges: [number, number, string][]) => {
        for (const [min, max, color] of ranges) {
            if (typeof value === 'number' && value >= min && value <= max) {
                return color;
            }
        }
        return '';
    };

    const getCellStyle = (value: number | string, ranges: [number, number, string][]) => {
        const color = getColorForValue(value, ranges);
        return { ...styles.tableData, color };
    };

    // Define color ranges for each stat
    const minutesPlayedRanges: [number, number, string][] = [
        [0, 24, 'red'],
        [25, 29, 'var(--gold)'],
        [30, Infinity, 'var(--brightGreen)'],
    ];
    const pointsRanges: [number, number, string][] = [
        [0, 11, 'red'],
        [12, 19, 'var(--gold)'],
        [20, Infinity, 'var(--brightGreen)'],
    ];
    const reboundsRanges: [number, number, string][] = [
        [0, 4, 'red'],
        [5, 7, 'var(--gold)'],
        [8, Infinity, 'var(--brightGreen)'],
    ];
    const assistsRanges: [number, number, string][] = [
        [0, 2, 'red'],
        [3, 4, 'var(--gold)'],
        [5, Infinity, 'var(--brightGreen)'],
    ];
    const stealsRanges: [number, number, string][] = [
        [0, 0, 'red'],
        [1, 1, 'var(--gold)'],
        [2, Infinity, 'var(--brightGreen)'],
    ];
    const blocksRanges: [number, number, string][] = [
        [0, 0, 'red'],
        [1, 1, 'var(--gold)'],
        [2, Infinity, 'var(--brightGreen)'],
    ];
    const threePointersRanges: [number, number, string][] = [
        [0, 0, 'red'],
        [1, 1, 'var(--gold)'],
        [2, Infinity, 'var(--brightGreen)'],
    ];
    const fieldGoalPercentageRanges: [number, number, string][] = [
        [0, 0.4, 'red'],
        [0.41, 0.5, 'var(--gold)'],
        [0.51, Infinity, 'var(--brightGreen)'],
    ];
    const freeThrowPercentageRanges: [number, number, string][] = [
        [0, 0.65, 'red'],
        [0.66, 0.85, 'var(--gold)'],
        [0.86, Infinity, 'var(--brightGreen)'],
    ];
    // Add ranges for other stats similarly...

    useEffect(() => {
        console.log(props.gamelogs);
    }, [props.gamelogs]);

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
                        <th style={styles.tableHeader}>3PM</th>
                        <th style={styles.tableHeader}>FG%</th>
                        <th style={styles.tableHeader}>FT%</th>
                        {/* Add headers for other stats */}
                    </tr>
                </thead>
                <tbody>
                    {props.gamelogs.map((gamelog, index) => (
                        <tr key={index}>
                            <td style={getCellStyle(formatDate(gamelog.date), [])}>{formatDate(gamelog.date)}</td>
                            <td style={getCellStyle(gamelog.opponentTeam, [])}>{gamelog.opponentTeam}</td>
                            <td style={getCellStyle(gamelog.minutesPlayed, minutesPlayedRanges)}>
                                {gamelog.minutesPlayed.toFixed(1)}
                            </td>
                            <td style={getCellStyle(gamelog.points, pointsRanges)}>{gamelog.points}</td>
                            <td style={getCellStyle(gamelog.rebounds, reboundsRanges)}>{gamelog.rebounds}</td>
                            <td style={getCellStyle(gamelog.assists, assistsRanges)}>{gamelog.assists}</td>
                            <td style={getCellStyle(gamelog.steals, stealsRanges)}>{gamelog.steals}</td>
                            <td style={getCellStyle(gamelog.blocks, blocksRanges)}>{gamelog.blocks}</td>
                            <td style={getCellStyle(gamelog.threesMade, threePointersRanges)}>{gamelog.threesMade}</td>
                            <td
                                style={getCellStyle(
                                    gamelog.fieldGoalsMade / gamelog.fieldGoalsAttempted,
                                    fieldGoalPercentageRanges
                                )}
                            >
                                {((100 * gamelog.fieldGoalsMade) / gamelog.fieldGoalsAttempted).toFixed(1)}
                            </td>
                            <td
                                style={getCellStyle(
                                    gamelog.freeThrowsMade / gamelog.freeThrowsAttempted,
                                    freeThrowPercentageRanges
                                )}
                            >
                                {((100 * gamelog.freeThrowsMade) / gamelog.freeThrowsAttempted).toFixed(1)}
                            </td>
                            {/* Render other cells similarly */}
                        </tr>
                    ))}
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
