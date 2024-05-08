import { MockDraftResponse } from '../../../../../../contracts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../shared';

export function MockDraftsPageMobile() {
    const { user } = useAuth();
    const [drafts, setDrafts] = useState<MockDraftResponse[] | null>(null);

    useEffect(() => {
        // Assuming you have an API endpoint to fetch user drafts by userId
        fetch((import.meta as any).env.VITE_REACT_API_URL + `/users/${user?.userId}/mock-drafts`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                setDrafts(data);
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user]);

    const navigate = useNavigate();

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.pageTitle}>Mock Drafts</h1>
                <p style={styles.headerSubtext}>Join a mock draft to practice drafting against other users.</p>
                <button
                    style={styles.createDraftButton}
                    onClick={() => {
                        navigate('/mock-drafts/create');
                    }}
                >
                    Create Draft
                </button>
            </div>
            <ul style={styles.draftList}>
                {drafts &&
                    drafts.map((draft, index) => (
                        <li style={styles.draftItem} key={index}>
                            <b style={styles.draftTitle}>
                                {draft.draftSettings.teamCount}-team {draft.draftSettings.scoringType}{' '}
                                {draft.draftSettings.orderType}
                            </b>
                            <p>
                                <i style={styles.draftSetting}>{draft.draftSettings.pointguardSlots} PG,</i>{' '}
                                <i style={styles.draftSetting}>{draft.draftSettings.shootingguardSlots} SG,</i>{' '}
                                <i style={styles.draftSetting}>{draft.draftSettings.smallforwardSlots} SF,</i>{' '}
                                <i style={styles.draftSetting}>{draft.draftSettings.powerforwardSlots} PF,</i>{' '}
                                <i style={styles.draftSetting}>{draft.draftSettings.centerSlots} C</i>
                            </p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

const styles = {
    page: {
        background: 'linear-gradient(to top, var(--brightBlack) 0%, var(--brightBlack) 75%, var(--dullIndigo) 100%)',
        height: 'calc(100% - 50px)'
    },
    header: {
        height: '200px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    } as React.CSSProperties,
    pageTitle: {
        color: 'var(--silver)',
        fontSize: '25px',
    },
    headerSubtext: {
        color: 'var(--silver)',
        fontSize: '15px',
    },
    draftTitle: {
        color: 'var(--silver)',
        fontSize: '15px',
    },
    draftSetting: {
        color: 'var(--grey)',
        fontSize: '10px',
    },
    draftItem: {
        backgroundColor: 'var(--transparentBlue)',
        padding: '5px 10px 5px 10px',
        borderRadius: '10px',
    },
    createDraftButton: {
        backgroundColor: 'white',
        color: 'var(--white)',
        padding: '10px',
        borderRadius: '10px',
        border: 'none',
        marginTop: '25px',
    },
    draftList: {
        backgroundColor: 'var(--mediumGrey)',
        borderRadius: '10px 10px 0px 0px',
        height: 'calc(100% - 200px)',
        padding: '10px',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    } as React.CSSProperties,
};
