import React, { useState } from 'react';
import { PageFrame, Button } from '../../../shared';
import { useAuth } from '../../../shared';
import PickList from '../../../shared/normal-screen/components/lists/PickList';
import { RadioInput } from '../../../shared/normal-screen/components/RadioInput';
import { useCreateMockDraft } from '../../hooks/useCreateMockDraft';

export function CreateMockDraftsPage() {
    const { handleCreateMockDraft } = useCreateMockDraft();
    
    const { user } = useAuth();
    
    const [scoringType, setScoringType] = useState('Points');
    const [orderType, setOrderType] = useState('Snake');
    const [teamCount, setTeamCount] = useState(10);
    const [pickTime, setPickTime] = useState(90);
    const [pointguardSlots, setPointguardSlots] = useState(1);
    const [shootingguardSlots, setShootingguardSlots] = useState(1);
    const [guardSlots, setGuardSlots] = useState(1);
    const [smallforwardSlots, setSmallforwardSlots] = useState(1);
    const [powerforwardSlots, setPowerforwardSlots] = useState(1);
    const [forwardSlots, setForwardSlots] = useState(1);
    const [centerSlots, setCenterSlots] = useState(1);
    const [utilitySlots, setUtilitySlots] = useState(3);
    const [benchSlots, setBenchSlots] = useState(4);

    const createMockdraft = async (event: any) => {
        event.preventDefault();
        if (user) {
            await handleCreateMockDraft({
                scheduledByUserId: user.userId,
                draftSettings: {
                    orderType: orderType.toLowerCase(),
                    scoringType: scoringType.toLowerCase(),
                    pickTimeSeconds: pickTime,
                    teamCount: teamCount,
                    pointguardSlots: pointguardSlots,
                    shootingguardSlots: shootingguardSlots,
                    guardSlots: guardSlots,
                    smallforwardSlots: smallforwardSlots,
                    powerforwardSlots: powerforwardSlots,
                    forwardSlots: forwardSlots,
                    centerSlots: centerSlots,
                    utilitySlots: utilitySlots,
                    benchSlots: benchSlots
                },
            });
        }
    };

    return (
        <PageFrame>
            <div style={styles.pageContainer}>
                <h1 style={styles.header}>Draft Creation</h1>
                <p style={styles.headerSubtext}>Set your draft settings below</p>
                <div style={styles.settingsRow}>
                    <RadioInput
                        setValue={(value) => setScoringType(String(value))}
                        values={['Points', 'Category']}
                        label={'Scoring'}
                        defaultValue={'Points'}
                    />
                    <RadioInput
                        setValue={(value) => setOrderType(String(value))}
                        values={['Snake', 'Linear']}
                        label={'Order'}
                        defaultValue={'Snake'}
                    />
                    <div style={styles.settingsGroup}>
                        <h5># Teams</h5>
                        <PickList
                            itemList={[8, 10, 12, 14]}
                            defaultValue={10}
                            setValue={(item) => setTeamCount(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.settingsGroup}>
                        <h5>Pick Time</h5>
                        <PickList
                            itemList={['30 seconds', '60 seconds', '90 seconds', '120 seconds']}
                            defaultValue="90 seconds"
                            setValue={(item) => setPickTime(Number(String(item).split(' ')[0]))}
                            width="110"
                        />
                    </div>
                </div>
                <h2 style={styles.rosterSpotsHeader}>Roster Spots</h2>
                <div style={styles.settingsRow}>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>PG</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setPointguardSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>SG</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setShootingguardSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>G</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setGuardSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>SF</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setSmallforwardSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>PF</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setPowerforwardSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>F</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setForwardSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>C</h5>
                        <PickList
                            itemList={['0', '1', '2']}
                            defaultValue="1"
                            setValue={(item) => setCenterSlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>UTIL</h5>
                        <PickList
                            itemList={['0', '1', '2', '3', '4']}
                            defaultValue="3"
                            setValue={(item) => setUtilitySlots(Number(item))}
                            width="50"
                        />
                    </div>
                    <div style={styles.rosterSetting}>
                        <h5 style={styles.rosterSettingLabel}>BE</h5>
                        <PickList
                            itemList={['0', '1', '2', '3', '4']}
                            defaultValue="4"
                            setValue={(item) => setBenchSlots(Number(item))}
                            width="50"
                        />
                    </div>
                </div>
                <Button style={styles.createMockDraftButton} handleOnClick={(e) => createMockdraft(e)}>
                    CREATE DRAFT
                </Button>
            </div>
        </PageFrame>
    );
}

const styles = {
    pageContainer: {
        backgroundColor: 'var(--silver)',
        padding: '50px',
        height: 'calc(100vh - 170px)',
        borderRadius: '10px',
        borderTop: '10px solid var(--indigo)'
    } as React.CSSProperties,
    header: {
        fontSize: '30px',
    } as React.CSSProperties,
    settingsGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    } as React.CSSProperties,
    radioInput: {
        display: 'flex',
        gap: '3px',
    } as React.CSSProperties,
    settingsRow: {
        display: 'flex',
        padding: '30px 0px 30px 0px',
        borderBottom: 'lightGrey 2px solid',
        gap: '50px',
        flexWrap: 'wrap',
    } as React.CSSProperties,
    headerSubtext: {
        borderBottom: 'lightGrey 2px solid',
        paddingBottom: '10px',
    } as React.CSSProperties,
    rosterSetting: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '30px',
        width: '120px',
    } as React.CSSProperties,
    rosterSettingLabel: {
        width: '100%',
        paddingRight: '5px',
        textAlign: 'right',
        paddingTop: '2px',
    } as React.CSSProperties,
    rosterSpotsHeader: {
        marginBottom: '-20px',
        fontSize: '20px',
        marginTop: '20px',
    } as React.CSSProperties,
    createMockDraftButton: {
        backgroundColor: 'var(--gold)',
        color: 'white',
        width: '40%',
        marginLeft: '30%',
        marginTop: '25px',
    } as React.CSSProperties,
};