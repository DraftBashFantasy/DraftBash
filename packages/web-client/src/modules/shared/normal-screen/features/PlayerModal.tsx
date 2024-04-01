import { useState } from 'react';
import { PlayerModalHeader } from '../components/player-modal/PlayerModalHeader';
import { PlayerModalAveragesSection } from '../components/player-modal/PlayerModalAveragesSection';
import { PlayerModalNews } from '../components/player-modal/PlayerModalNews';
import { PlayerModalGamelogs } from '../components/player-modal/PlayerModalGamelogs';

export const PlayerModal = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div style={{ display: 'flex', position: 'absolute', gap: '10px'}}>
                <div style={styles.playerPictureFrame}>
                    <img
                        style={styles.playerPicture}
                        src="https://cdn.nba.com/headshots/nba/latest/260x190/2544.png"
                        alt="Lebron James"
                    />
                </div>
                <div>
                    <p
                        style={isHovered ? { ...styles.modalButton, ...styles.modalButtonHovered } : styles.modalButton}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                        Lebron James
                    </p>
                    <div style={styles.teamSection}>
                        <img src="/team-logos/LAL.svg" alt="Los Angeles Lakers Logo" style={styles.teamLogo} />
                        <p style={{ color: 'var(--mediumGrey)', fontWeight: '500' }}>Lakers | C</p>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} style={styles.modalBackground}>
                    <div style={styles.modalContent}>
                        <PlayerModalHeader />
                        <PlayerModalAveragesSection />
                        <PlayerModalNews />
                        <PlayerModalGamelogs />
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
    },
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
    },
    teamSection: {
        display: 'flex',
        gap: '10px',
    },
    modalButton: {
        color: 'var(--dullIndigo)',
        cursor: 'pointer',
        transition: '0.2s',
        fontSize: '18px',
        textAlign: 'left',
    },
    modalButtonHovered: {
        color: 'var(--indigo)',
        cursor: 'pointer',
    },
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
    } as React.CSSProperties,
};
