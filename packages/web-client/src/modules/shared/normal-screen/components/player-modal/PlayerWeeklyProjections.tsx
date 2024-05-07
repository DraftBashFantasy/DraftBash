import React from 'react';
import { PlayerGameProjectionsResponse } from '../../../../../../../contracts';

interface Props {
    playersProjections: PlayerGameProjectionsResponse[];
}

export const PlayerWeeklyProjections = (props: Props) => {
    const formatDate = (date: string | null) => {
        if (!date) {
            return '';
        } else {
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
                <h5 style={styles.title}>Current Week Projections</h5>
            </div>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.tableHeader}>DATE</th>
                        <th style={styles.tableHeader}>OPP</th>
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
                    {props.playersProjections.map((playerProjections, index) => (
                        <tr key={index}>
                            <td style={getCellStyle(formatDate(playerProjections.dateUTC), [])}>
                                {formatDate(playerProjections.dateUTC)}
                            </td>
                            <td style={getCellStyle(playerProjections.opposingTeam?.abbreviation, [])}>
                                {playerProjections.opposingTeam?.abbreviation}
                            </td>
                            <td style={getCellStyle(playerProjections.points, pointsRanges)}>
                                {playerProjections.points.toFixed(1)}
                            </td>
                            <td style={getCellStyle(playerProjections.rebounds, reboundsRanges)}>
                                {playerProjections.rebounds.toFixed(1)}
                            </td>
                            <td style={getCellStyle(playerProjections.assists, assistsRanges)}>
                                {playerProjections.assists.toFixed(1)}
                            </td>
                            <td style={getCellStyle(playerProjections.steals, stealsRanges)}>
                                {playerProjections.steals.toFixed(1)}
                            </td>
                            <td style={getCellStyle(playerProjections.blocks, blocksRanges)}>
                                {playerProjections.blocks.toFixed(1)}
                            </td>
                            <td style={getCellStyle(playerProjections.threesMade, threePointersRanges)}>
                                {playerProjections.threesMade.toFixed(1)}
                            </td>
                            <td
                                style={getCellStyle(
                                    playerProjections.fieldGoalsMade / playerProjections.fieldGoalsAttempted,
                                    fieldGoalPercentageRanges
                                )}
                            >
                                {playerProjections.fieldGoalsAttempted !== 0
                                    ? (
                                          (100 * playerProjections.fieldGoalsMade) /
                                          playerProjections.fieldGoalsAttempted
                                      ).toFixed(1)
                                    : '-'}
                            </td>
                            <td
                                style={getCellStyle(
                                    playerProjections.freeThrowsMade / playerProjections.freeThrowsAttempted,
                                    freeThrowPercentageRanges
                                )}
                            >
                                {playerProjections.freeThrowsAttempted !== 0
                                    ? (
                                          (100 * playerProjections.freeThrowsMade) /
                                          playerProjections.freeThrowsAttempted
                                      ).toFixed(1)
                                    : '-'}
                            </td>
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
