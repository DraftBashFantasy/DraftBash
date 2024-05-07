import { PlayerResponse } from "../../../../../../../contracts";

interface Props {
    player: PlayerResponse;
}

export const PlayerModalHeader = (props: Props) => {

    const formatTrend = (adds: number, drops: number) => {
        if (props.player.addCount > props.player.dropCount) {
            return `${props.player.addCount} adds`
        }
        else if (props.player.addCount < props.player.dropCount) {
            return `${props.player.dropCount} drops`
        }
        else {
            return 'No change'
        }
    }

    const inchesToFeetAndInches = (inches: number) => {
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        return `${feet}'${remainingInches}"`;
    }

    return (
        <div style={styles.container}>
            <div style={styles.leftItem}>
                <img
                    style={styles.playerPicture}
                    src={`https://cdn.nba.com/headshots/nba/latest/260x190/${props.player.playerId}.png`}
                    alt={`${props.player.firstName} ${props.player.lastName}`}
                />
                <img
                    src={`/team-logos/${props.player.team.abbreviation}.svg`}
                    alt={`${props.player.team.name} Logo`}
                    style={styles.teamLogo}
                />
                <b style={styles.jerseyNumber}>#{props.player.jerseyNumber}</b>
                <i style={styles.triangle}></i>
            </div>
            <div style={styles.middleItem}>
                <p style={{ textAlign: 'left', fontSize: '20px', marginBottom: '-10px' }}>{props.player.firstName}</p>
                <p style={{ textAlign: 'left', fontSize: '20px', fontWeight: '600', marginBottom: '-5px' }}>
                    {props.player.lastName}
                </p>
                <p style={{ textAlign: 'left', color: 'grey', marginBottom: '10px' }}>
                    {props.player.team.location} {props.player.team.name}
                </p>
                <div style={{ display: 'flex' }}>
                    <p style={{ textAlign: 'left', width: '100px' }}>AGE</p>
                    <p>{props.player.age}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p style={{ textAlign: 'left', width: '100px' }}>POSITION</p>
                    <p>{props.player.fantasyPositions.join(', ')}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p style={{ textAlign: 'left', width: '100px' }}>STATUS</p>
                    <p
                        style={{
                            color:
                                props.player.injuryStatus == 'OUT'
                                    ? 'red'
                                    : props.player.injuryStatus == 'DTD' || props.player.injuryStatus == 'GTD'
                                    ? 'var(--orange)'
                                    : 'var(--brightGreen)',
                        }}
                    >
                        {props.player.injuryStatus == null ? 'HEALTHY' : props.player.injuryStatus}
                    </p>
                </div>
            </div>
            <div style={styles.rightItem}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <div>
                        <p style={{ color: 'var(--mediumGrey)', marginBottom: '-5px' }}>Rank</p>
                        <p
                            style={{
                                textAlign: 'center',
                                color: 'var(--darkGrey)',
                                fontWeight: '600',
                                fontSize: '20px',
                            }}
                        >
                            {props.player.seasonProjections.pointsLeagueRanking}
                        </p>
                    </div>
                    <div>
                        <p style={{ color: 'var(--mediumGrey)', marginBottom: '-5px' }}>Height</p>
                        <p
                            style={{
                                textAlign: 'center',
                                color: 'var(--mediumGrey)',
                                fontWeight: '600',
                                fontSize: '20px',
                            }}
                        >
                            {inchesToFeetAndInches(props.player.height)}
                        </p>
                    </div>
                    <div>
                        <p style={{ color: 'var(--mediumGrey)', marginBottom: '-5px' }}>Weight</p>
                        <p
                            style={{
                                textAlign: 'center',
                                color: 'var(--mediumGrey)',
                                fontWeight: '600',
                                fontSize: '20px',
                            }}
                        >
                            {props.player.weight} {'lbs'}
                        </p>
                    </div>
                </div>
                <p
                    style={{
                        textAlign: 'left',
                        color: 'var(--mediumGrey)',
                        fontWeight: '600',
                        fontSize: '20px',
                        marginTop: '10px',
                    }}
                >
                    24HR Trend
                </p>
                <p
                    style={{
                        textAlign: 'left',
                        marginTop: '-5px',
                        color:
                            props.player.addCount < props.player.dropCount
                                ? 'red'
                                : props.player.addCount > props.player.dropCount
                                ? 'var(--brightGreen)'
                                : 'var(--darkGrey)',
                    }}
                >
                    {formatTrend(props.player.addCount, props.player.dropCount)}
                </p>
                <a
                    href="https://sleeper.com/fantasy-basketball"
                    style={{
                        marginLeft: '80px',
                        color: 'var(--mediumGrey)',
                        fontSize: '12px',
                    }}
                >
                    From sleeper.com
                </a>
            </div>
        </div>
    );
};

const styles = {
    jerseyNumber: {
        position: 'absolute',
        right: '-15px',
        top: '5px',
        zIndex: '3',
        color: 'rgb(200, 200, 200',
        fontSize: '40px',
        fontWeight: '400',
    } as React.CSSProperties,
    triangle: {
        width: '0',
        height: '0',
        borderLeft: '40px solid transparent',
        borderRight: '40px solid transparent',
        borderBottom: '159.5px solid var(--silver)',
        position: 'absolute',
        right: '-40px',
        zIndex: '2',
    } as React.CSSProperties,
    leftItem: {
        borderRadius: '10px 0px 0px 0px',
        width: '100%',
        position: 'relative',
        backgroundColor: 'var(--grey)',
        borderBottom: '1px solid var(--grey)',
    } as React.CSSProperties,
    container: {
        display: 'flex',
        height: '180px',
        position: 'relative',
        justifyContent: 'space-between',
        backgroundColor: 'var(--silver)',
        borderRadius: '10px',
        paddingBottom: '20px',
    } as React.CSSProperties,
    rightItem: {
        backgroundColor: 'var(--silver)',
        width: '100%',
        padding: '20px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid var(--grey)',
    } as React.CSSProperties,
    middleItem: {
        width: '100%',
        display: 'flex',
        backgroundColor: 'var(--silver)',
        zIndex: '2',
        padding: '5px 0px 0px 25px',
        flexDirection: 'column',
        gap: '0px',
        borderRight: '1px solid var(--grey)',
        borderBottom: '1px solid var(--grey)',
    } as React.CSSProperties,
    playerPicture: {
        position: 'absolute',
        left: '0px',
        zIndex: 2,
        height: '150px',
        bottom: '0px',
    } as React.CSSProperties,
    teamLogo: {
        position: 'absolute',
        height: '75px',
        left: '5px',
        top: '5px',
        opacity: '0.5',
    } as React.CSSProperties,
};
