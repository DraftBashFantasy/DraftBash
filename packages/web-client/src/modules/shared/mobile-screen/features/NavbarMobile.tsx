import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

export const NavbarMobile = () => {
    const { logout } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleModalClick = () => {
        setIsModalOpen(false);
    };

    return (
        <div style={styles.navbar}>
            <p style={styles.title}>DraftBash</p>
            <div style={styles.dotContainer}>
                <BsThreeDotsVertical style={styles.logout} onClick={toggleModal} />
            </div>
            {isModalOpen && (
                <div onClick={handleModalClick} style={styles.modalBackground}>
                    <div style={styles.modalContent}>
                        <ul>
                            <li onClick={logout} style={styles.modalText}>
                                <FaSignOutAlt />Logout
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    navbar: {
        backgroundColor: 'var(--indigo)',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 5px 5px 20px',
        gap: '30px',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, .5)',
        borderBottom: '1px solid var(--gold)',
        position: 'relative',
        width: '100%',
    } as React.CSSProperties,
    logout: {
        cursor: 'pointer',
        color: 'white',
        height: '100%',
        padding: '0px 10px 0px 10px',
        width: '40px',
    } as React.CSSProperties,
    dotContainer: {
        position: 'absolute',
        right: '20px',
    } as React.CSSProperties,
    title: {
        color: 'white',
        fontSize: '20px',
        fontWeight: '500',
    } as React.CSSProperties,
    modalBackground: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
    } as React.CSSProperties,
    modalContent: {
        backgroundColor: 'var(--brightBlack)',
        padding: '5px',
        position: 'absolute',
        borderRadius: '10px',
        right: '10px',
        top: '49px',
        width: '150px',
        fontWidth: '500',
        height: '150px'
    } as React.CSSProperties,
    modalText: {
        cursor: 'pointer',
        padding: '10px',
        color: 'white',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    } as React.CSSProperties,
};
