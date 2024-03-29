import { PageFrame } from '../../shared';
import { TextInput } from '../../shared';
import PickList from '../../shared/normal-screen/components/lists/PickList';
import { RadioInput } from '../../shared/normal-screen/components/RadioInput';
import { PlayerInfoTable } from './features/PlayerInfoTable';


export const PlayersPage = () => {
    return (
        <PageFrame>
            <div style={styles.settingsSection}>
                <div style={styles.settingsHeader}>
                    <h1 style={styles.settingsHeaderTitle}>Players</h1>
                    <TextInput placeholder="🔍 Search" onChange={() => console.log('Hi')} />
                </div>
                <div style={styles.positionFilter}>
                    <b>Position:</b>
                    <PickList
                        itemList={['All', 'PG', 'SG', 'SF', 'PF', 'C', 'G', 'F']}
                        setValue={() => {
                            console.log('');
                        }}
                        defaultValue={'All'}
                        width={'50'}
                    />
                </div>
                <RadioInput
                    setValue={() => console.log('Hi')}
                    values={['Points', 'Category']}
                    label={'Scoring'}
                    defaultValue={'Points'}
                />
            </div>
            <div style={styles.playersInfoSection}>
                <PlayerInfoTable />
                <PlayerInfoTable />
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
        gap: '10px',
        alignItems: 'flex-start',
    } as React.CSSProperties,
    playersInfoSection: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--silver)',
        borderRadius: '10px',
        marginTop: '10px',
        padding: '10px',
        height: 'calc(100%)'
    } as React.CSSProperties,
};
