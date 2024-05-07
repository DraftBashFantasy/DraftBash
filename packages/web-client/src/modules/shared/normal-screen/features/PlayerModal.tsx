import { useEffect, useState } from 'react';
import { PlayerModalHeader } from '../components/player-modal/PlayerModalHeader';
import { PlayerModalAveragesSection } from '../components/player-modal/PlayerModalAveragesSection';
import { PlayerModalNews } from '../components/player-modal/PlayerModalNews';
import { PlayerModalGamelogs } from '../components/player-modal/PlayerModalGamelogs';
import { PlayerWeeklyProjections } from '../components/player-modal/PlayerWeeklyProjections';
import { GamelogResponse, PlayerResponse } from '../../../../../..//contracts';
import { useFetchPlayerGamelogs } from '../../../players';

interface Props {
    player: PlayerResponse;
}

export const PlayerModal = (props: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { gamelogs, fetchGamelogs } = useFetchPlayerGamelogs();

    useEffect(() => {
        if (isModalOpen) {
            fetchGamelogs(props.player.playerId);
        }
    }, [isModalOpen]);

    return (
        <>
            <div style={{ display: 'flex', position: 'absolute', gap: '10px' }}>
                <div style={styles.playerPictureFrame}>
                    <img
                        style={styles.playerPicture}
                        src={`https://cdn.nba.com/headshots/nba/latest/260x190/${props.player.playerId}.png`}
                        alt={`${props.player.firstName} ${props.player.lastName}`}
                    />
                </div>
                <div>
                    <p
                        style={isHovered ? { ...styles.modalButton, ...styles.modalButtonHovered } : styles.modalButton}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                        {props.player.firstName} {props.player.lastName}
                    </p>
                    <div style={styles.teamSection}>
                        <img
                            src={`/team-logos/${props.player.team.abbreviation}.svg`}
                            alt={`${props.player.team.abbreviation} logo`}
                            style={styles.teamLogo}
                        />
                        <p style={{ color: 'var(--mediumGrey)', fontWeight: '500' }}>
                            {props.player.team.abbreviation} | {props.player.fantasyPositions.join(', ')}
                        </p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} style={styles.modalBackground}>
                    <div style={styles.modalContent}>
                        <PlayerModalHeader player={props.player} />
                        <PlayerModalAveragesSection player={props.player} />
                        <PlayerModalNews />
                        <PlayerWeeklyProjections playersProjections={props.player.currentWeekProjections} />
                        <PlayerModalGamelogs gamelogs={gamelogs} />
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    playerPicture: {
        width: '75px',
        position: 'absolute',
        left: '-10px',
        bottom: '0px',
    } as React.CSSProperties,
    playerPictureFrame: {
        position: 'relative',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '1px solid var(--grey)',
    } as React.CSSProperties,
    teamLogo: {
        height: '30px',
    } as React.CSSProperties,
    teamSection: {
        display: 'flex',
        gap: '10px',
    } as React.CSSProperties,
    modalButton: {
        color: 'var(--dullIndigo)',
        cursor: 'pointer',
        transition: '0.2s',
        fontSize: '18px',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '170px',
        textOverflow: 'ellipsis',
    } as React.CSSProperties,
    modalButtonHovered: {
        color: 'var(--indigo)',
        cursor: 'pointer',
    } as React.CSSProperties,
    modalBackground: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        overflow: 'auto',
    } as React.CSSProperties,
    modalContent: {
        backgroundColor: 'var(--lightGrey)',
        borderRadius: '10px',
        width: '700px',
        margin: 'auto',
        marginTop: '50px',
        height: '100%',
        marginBottom: '50px',
        padding: '20px',
        zIndex: '5',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        overflow: 'auto'
    } as React.CSSProperties,
};
