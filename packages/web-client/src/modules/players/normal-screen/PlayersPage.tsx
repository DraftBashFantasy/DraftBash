import { PageFrame } from '../../shared';
import { TextInput } from '../../shared';
import PickList from '../../shared/normal-screen/components/lists/PickList';
import { RadioInput } from '../../shared/normal-screen/components/RadioInput';
import { PlayerInfoTable } from './features/PlayerInfoTable';
import { useFetchPlayers } from '../hooks/useFetchPlayers';
import { useEffect, useState } from 'react';


export const PlayersPage = () => {

    const { players } = useFetchPlayers();
    const [filteredPlayers, setFilteredPlayers] = useState(players);
    const [searchInput, setSearchInput] = useState('');
    const [position, setPosition] = useState('All');
    const [trend, setTrend] = useState('None');
    const [scoringSystem, setScoringSystem] = useState('Points');

    useEffect(() => {
        setFilteredPlayers(players);
    }, [players]);

    useEffect(() => {
        let currentFilteredPlayers = players;
        currentFilteredPlayers = currentFilteredPlayers.filter((player) => {
            const fullName = `${player.firstName} ${player.lastName}`;
            const searchLower = searchInput.toLowerCase();
            const fullNameLower = fullName.toLowerCase();
            return fullNameLower.includes(searchLower) || fullNameLower.replace(/\s/g, '').includes(searchLower);
        });
        currentFilteredPlayers = currentFilteredPlayers.filter((player) => {
            if (position === 'All') {
                return true;
            } else if (player.position === position) {
                return true;
            } else if (position === 'G' && (player.position === 'PG' || player.position === 'SG')) {
                return true;
            } else if (position === 'F' && (player.position === 'SF' || player.position === 'PF')) {
                return true;
            }
        });

        if (scoringSystem === 'Points') {
            currentFilteredPlayers = [...currentFilteredPlayers].sort((a, b) => {
                // Handle null values for pointsLeagueRanking
                const rankingA =
                    a.seasonProjections.pointsLeagueRanking !== null
                        ? a.seasonProjections.pointsLeagueRanking
                        : Number.MAX_SAFE_INTEGER;
                const rankingB =
                    b.seasonProjections.pointsLeagueRanking !== null
                        ? b.seasonProjections.pointsLeagueRanking
                        : Number.MAX_SAFE_INTEGER;
                return rankingA - rankingB;
            });
        } else {
            currentFilteredPlayers = [...currentFilteredPlayers].sort((a, b) => {
                // Handle null values for categoryLeagueRanking
                const rankingA =
                    a.seasonProjections.categoryLeagueRanking !== null
                        ? a.seasonProjections.categoryLeagueRanking
                        : Number.MAX_SAFE_INTEGER;
                const rankingB =
                    b.seasonProjections.categoryLeagueRanking !== null
                        ? b.seasonProjections.categoryLeagueRanking
                        : Number.MAX_SAFE_INTEGER;
                return rankingA - rankingB;
            });
        }

        if (trend === 'Up') {
            console.log("Hello")
            currentFilteredPlayers = currentFilteredPlayers.filter((player) => {
                return player.addCount > player.dropCount;
            });
            currentFilteredPlayers = [...currentFilteredPlayers].sort((a, b) => {
                return b.addCount - a.addCount;
            });
        } else if (trend === 'Down') {
            currentFilteredPlayers = currentFilteredPlayers.filter((player) => {
                return player.addCount < player.dropCount;
            });
            currentFilteredPlayers = [...currentFilteredPlayers].sort((a, b) => {
                return b.dropCount - a.dropCount;
            });
        }

        setFilteredPlayers(currentFilteredPlayers);
    }, [searchInput, position, trend, scoringSystem])

    return (
        <PageFrame>
            <div style={styles.settingsSection}>
                <div style={styles.settingsHeader}>
                    <h1 style={styles.settingsHeaderTitle}>Players</h1>
                    <TextInput placeholder="🔍 Search" onChange={(e) => setSearchInput(e)} />
                </div>
                <div style={styles.positionFilter}>
                    <b>Position</b>
                    <PickList
                        itemList={['All', 'PG', 'SG', 'SF', 'PF', 'C', 'G', 'F']}
                        setValue={(item) => setPosition(item as string)}
                        defaultValue={'All'}
                        width={'50'}
                    />
                </div>
                <div style={{ display: 'flex', gap: '70px' }}>
                    <RadioInput
                        setValue={(item) => setScoringSystem(item as string)}
                        values={['Points', 'Category']}
                        label={'Scoring'}
                        defaultValue={'Points'}
                    />
                    <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
                        <b>Trending</b>
                        <PickList
                            itemList={['Down', 'Up', 'None']}
                            setValue={(item) => {
                                setTrend(item as string);
                            }}
                            defaultValue={'None'}
                            width={'55'}
                        />
                    </div>
                </div>
            </div>
            <div style={styles.playersInfoSection}>
                <PlayerInfoTable players={filteredPlayers} />
            </div>
        </PageFrame>
    );
};

const styles = {
    settingsSection: {
        backgroundColor: 'var(--silver)',
        padding: '20px',
        borderRadius: '10px',
        borderTop: '10px solid var(--indigo)',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    } as React.CSSProperties,
    settingsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '50%',
    } as React.CSSProperties,
    settingsHeaderTitle: {
        fontSize: '30px',
        fontWeight: '600',
        color: 'var(--darkGrey)',
        lineHeight: '20px',
    } as React.CSSProperties,
    positionFilter: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        alignItems: 'flex-start',
    } as React.CSSProperties,
    playersInfoSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--silver)',
        borderRadius: '10px',
        marginTop: '10px',
        padding: '10px',
        height: 'calc(100%)',
        overflow: 'auto'
    } as React.CSSProperties,
};
