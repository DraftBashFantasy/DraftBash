import React from 'react';
import { GamelogResponse } from '../../../../../../../contracts';

interface Props {
    gamelogs: GamelogResponse[];
}

export const PlayerModalGamelogs = (props: Props) => {
    const formatDate = (date: string | null) => {
        if (!date) {
            return '';
        }
        else {
            const dateArray = date.split('-');
            const month = dateArray[1];
            const day = dateArray[2].slice(0, 2);
            return `${month}/${day}`;
        }
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
        [24, 30, 'var(--gold)'],
        [30, Infinity, 'var(--brightGreen)'],
    ];
    const pointsRanges: [number, number, string][] = [
        [0, 11, 'red'],
        [11, 20, 'var(--gold)'],
        [20, Infinity, 'var(--brightGreen)'],
    ];
    const reboundsRanges: [number, number, string][] = [
        [0, 4, 'red'],
        [4, 7, 'var(--gold)'],
        [7, Infinity, 'var(--brightGreen)'],
    ];
    const assistsRanges: [number, number, string][] = [
        [0, 2, 'red'],
        [2, 4, 'var(--gold)'],
        [4, Infinity, 'var(--brightGreen)'],
    ];
    const stealsRanges: [number, number, string][] = [
        [0, 0, 'red'],
        [0, 1, 'var(--gold)'],
        [1, Infinity, 'var(--brightGreen)'],
    ];
    const blocksRanges: [number, number, string][] = [
        [0, 0, 'red'],
        [0, 1, 'var(--gold)'],
        [1, Infinity, 'var(--brightGreen)'],
    ];
    const threePointersRanges: [number, number, string][] = [
        [0, 0, 'red'],
        [0, 1, 'var(--gold)'],
        [1, Infinity, 'var(--brightGreen)'],
    ];
    const fieldGoalPercentageRanges: [number, number, string][] = [
        [0, 0.4, 'red'],
        [0.4, 0.5, 'var(--gold)'],
        [0.5, Infinity, 'var(--brightGreen)'],
    ];
    const freeThrowPercentageRanges: [number, number, string][] = [
        [0, 0.65, 'red'],
        [0.65, 0.85, 'var(--gold)'],
        [0.85, Infinity, 'var(--brightGreen)'],
    ];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h5 style={styles.title}>Gamelog</h5>
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
                    </tr>
                </thead>
                <tbody>
                    {props.gamelogs.map((gamelog, index) =>
                        gamelog.isActive && gamelog.minutes > 0 ? (
                            <tr key={index}>
                                <td style={getCellStyle(formatDate(gamelog.dateUTC), [])}>
                                    {formatDate(gamelog.dateUTC)}
                                </td>
                                <td style={getCellStyle(gamelog.opposingTeam?.abbreviation, [])}>
                                    {gamelog.opposingTeam?.abbreviation}
                                </td>
                                <td style={getCellStyle(gamelog.minutes, minutesPlayedRanges)}>
                                    {gamelog.minutes.toFixed(1)}
                                </td>
                                <td style={getCellStyle(gamelog.points, pointsRanges)}>{gamelog.points}</td>
                                <td style={getCellStyle(gamelog.reboundsTotal, reboundsRanges)}>
                                    {gamelog.reboundsTotal}
                                </td>
                                <td style={getCellStyle(gamelog.assists, assistsRanges)}>{gamelog.assists}</td>
                                <td style={getCellStyle(gamelog.steals, stealsRanges)}>{gamelog.steals}</td>
                                <td style={getCellStyle(gamelog.blocks, blocksRanges)}>{gamelog.blocks}</td>
                                <td style={getCellStyle(gamelog.threesMade, threePointersRanges)}>
                                    {gamelog.threesMade}
                                </td>
                                <td
                                    style={getCellStyle(
                                        gamelog.fieldGoalsMade / gamelog.fieldGoalsAttempted,
                                        fieldGoalPercentageRanges
                                    )}
                                >
                                    {gamelog.fieldGoalsAttempted !== 0
                                        ? ((100 * gamelog.fieldGoalsMade) / gamelog.fieldGoalsAttempted).toFixed(1)
                                        : '-'}
                                </td>
                                <td
                                    style={getCellStyle(
                                        gamelog.freeThrowsMade / gamelog.freeThrowsAttempted,
                                        freeThrowPercentageRanges
                                    )}
                                >
                                    {gamelog.freeThrowsAttempted !== 0
                                        ? ((100 * gamelog.freeThrowsMade) / gamelog.freeThrowsAttempted).toFixed(1)
                                        : '-'}
                                </td>
                            </tr>
                        ) : (
                            <tr key={index}>
                                <td style={styles.tableData}>{formatDate(gamelog.dateUTC)}</td>
                                <td style={styles.tableData}>{gamelog.opposingTeam?.abbreviation}</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                                <td style={styles.tableData}>-</td>
                            </tr>
                        )
                    )}
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