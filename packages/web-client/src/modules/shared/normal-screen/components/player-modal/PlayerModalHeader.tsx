export const PlayerModalHeader = () => {
    return (
        <div style={styles.container}>
            <div style={styles.leftItem}>
                <img
                    style={styles.playerPicture}
                    src="https://cdn.nba.com/headshots/nba/latest/260x190/2544.png"
                    alt="Lebron James"
                />
                <img src="/team-logos/LAL.svg" alt="Los Angeles Lakers Logo" style={styles.teamLogo} />
                <b style={styles.jerseyNumber}>
                    #15
                </b>
                <i style={styles.triangle}></i>
            </div>
            <div style={styles.middleItem}>
                <p style={{ textAlign: 'left', fontSize: '20px', marginBottom: '-10px' }}>Lebron</p>
                <p style={{ textAlign: 'left', fontSize: '20px', fontWeight: '600' }}>James</p>
                <p style={{ textAlign: 'left', color: 'grey', marginBottom: '15px' }}>Los Angeles Lakers</p>
                <div style={{ display: 'flex' }}>
                    <p style={{ textAlign: 'left', width: '100px' }}>POSITION</p>
                    <p>C</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <p style={{ textAlign: 'left', width: '100px' }}>STATUS</p>
                    <p>OUT</p>
                </div>
            </div>
            <div style={styles.rightItem}>
                <p style={{ textAlign: 'left', color: 'var(--mediumGrey)', marginBottom: '-5px' }}>Position Rank</p>
                <p style={{ textAlign: 'left', color: 'var(--darkGrey)', fontWeight: '600', fontSize: '20px' }}>1</p>
                <p style={{ textAlign: 'left', color: 'var(--mediumGrey)',fontWeight: '600', fontSize: '20px', marginTop: '10px' }}>24HR Trend</p>
                <p style={{ textAlign: 'left', color: 'var(--darkGrey)', marginTop: '-5px' }}>+4.5k Adds</p>
                <a
                    href="https://sleeper.com/fantasy-basketball"
                    style={{
                        marginLeft: '90px',
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
    },
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
        padding: '30px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid var(--grey)',
    },
    middleItem: {
        width: '100%',
        display: 'flex',
        backgroundColor: 'var(--silver)',
        zIndex: '2',
        padding: '10px 0px 10px 20px',
        flexDirection: 'column',
        gap: '0px',
        borderRight: '1px solid var(--grey)',
        borderBottom: '1px solid var(--grey)',
    },
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
