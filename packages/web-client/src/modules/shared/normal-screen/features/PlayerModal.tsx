import { useState } from "react";


export const PlayerModal = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <p
                style={isHovered ? { ...styles.modalButton, ...styles.modalButtonHovered } : styles.modalButton}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsModalOpen(!isModalOpen)}
            >
                Lebron James
            </p>
            {isModalOpen && (
                <div onClick={() => setIsModalOpen(false)} style={styles.modalBackground}>
                    <div style={styles.modalContent}>
                        <div style={styles.modalHeader}>
                            <img
                                style={styles.playerPicture}
                                src="https://cdn.nba.com/headshots/nba/latest/260x190/2544.png"
                                alt="Lebron James"
                            />
                            <h2>Lebron James</h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    modalHeader: {
        display: 'flex'
    },
    playerPicture: {

    },
    modalButton: {
        color: 'var(--dullIndigo)',
        cursor: 'pointer',
        transition: '0.2s'
    },
    modalButtonHovered: {
        color: 'var(--indigo)',
        cursor: 'pointer'
    },
    modalBackground: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        overflow: 'auto'
    } as React.CSSProperties,
    modalContent: {
        backgroundColor: 'var(--grey)',
        borderRadius: '10px',
        width: '700px',
        margin: 'auto',
        marginTop: '50px',
        height: '100%',
        marginBottom: '50px'
    } as React.CSSProperties
};
