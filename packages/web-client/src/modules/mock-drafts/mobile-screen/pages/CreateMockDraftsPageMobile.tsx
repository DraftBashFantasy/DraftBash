import { useState } from "react";
import { DraftSettingMobile } from "../components/DraftSetting";
import { RosterSetting } from "../components/RosterSetting";
import { useCreateMockDraft } from "../../hooks/useCreateMockDraft";
import { useAuth } from "../../../shared";
import { useNavigate } from 'react-router-dom';


export function CreateMockDraftsPageMobile() {
    const navigate = useNavigate();
    const { handleCreateMockDraft } = useCreateMockDraft();
    const { user } = useAuth();
    const [orderType, setOrderType] = useState('Snake');
    const [scoringType, setScoringType] = useState('Points');
    const [teamCount, setTeamCount] = useState(10);
    const [pickTimeSeconds, setPickTimeSeconds] = useState(90);
    const [pointguardSlots, setPointguardSlots] = useState(1);
    const [shootingguardSlots, setShootingguardSlots] = useState(1);
    const [guardSlots, setGuardSlots] = useState(1);
    const [smallforwardSlots, setSmallforwardSlots] = useState(1);
    const [powerforwardSlots, setPowerforwardSlots] = useState(1);
    const [forwardSlots, setForwardSlots] = useState(1);
    const [centerSlots, setCenterSlots] = useState(1);
    const [utilitySlots, setUtilitySlots] = useState(2);
    const [benchSlots, setBenchSlots] = useState(4);

    const createMockdraft = async () => {
        if (user) {
            await handleCreateMockDraft({
                scheduledByUserId: user.userId,
                draftSettings: {
                    orderType: orderType.toLowerCase(),
                    scoringType: scoringType.toLowerCase(),
                    pickTimeSeconds: pickTimeSeconds,
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
            navigate('/mock-drafts');
        }
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.pageTitle} onClick={() => console.log('Hello')}>
                    Draft Settings
                </h1>
                <p style={styles.createButton} onClick={() => createMockdraft()}>
                    Create
                </p>
            </div>
            <DraftSettingMobile
                value={scoringType}
                setValue={setScoringType}
                values={['Points', 'Category']}
                title={'Scoring Type'}
                width={100}
            />
            <DraftSettingMobile
                value={orderType}
                setValue={setOrderType}
                values={['Snake', 'Linear']}
                title={'Order Type'}
                width={100}
            />
            <DraftSettingMobile
                value={teamCount}
                setValue={setTeamCount}
                values={[4, 6, 8, 10, 12, 14]}
                title={'# Teams'}
                width={65}
            />
            <DraftSettingMobile
                value={pickTimeSeconds}
                setValue={setPickTimeSeconds}
                values={[30, 60, 90, 120, 150, 180]}
                title={'Time Per Pick'}
                width={65}
            />
            <div>
                <h5 style={styles.rosterTitle}>Roster</h5>
                <RosterSetting
                    value={pointguardSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Point Guard (PG)'}
                    setValue={setPointguardSlots}
                />
                <RosterSetting
                    value={shootingguardSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Shooting Guard (PG)'}
                    setValue={setShootingguardSlots}
                />
                <RosterSetting
                    value={guardSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Guard (G/PG/SG)'}
                    setValue={setGuardSlots}
                />
                <RosterSetting
                    value={smallforwardSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Smallforward (SF)'}
                    setValue={setSmallforwardSlots}
                />
                <RosterSetting
                    value={powerforwardSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Powerforward (PF)'}
                    setValue={setPowerforwardSlots}
                />
                <RosterSetting
                    value={forwardSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Forward (F/SF/PF)'}
                    setValue={setForwardSlots}
                />
                <RosterSetting
                    value={centerSlots}
                    lowerBound={0}
                    upperBound={2}
                    title={'Center (C)'}
                    setValue={setCenterSlots}
                />
                <RosterSetting
                    value={utilitySlots}
                    lowerBound={0}
                    upperBound={4}
                    title={'Utility (ALL)'}
                    setValue={setUtilitySlots}
                />
                <RosterSetting
                    value={benchSlots}
                    lowerBound={0}
                    upperBound={6}
                    title={'Bench'}
                    setValue={setBenchSlots}
                />
            </div>
        </div>
    );
}

const styles = {
    page: {
        backgroundColor: 'var(--mediumGrey)',
        height: 'calc(100% - 50px)',
        padding: '0px 20px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        overflowY: 'auto',
        overflowX: 'hidden'
    },
    header: {
        color: 'var(--silver)',
        fontSize: '20px',
        position: 'sticky',
        width: 'calc(100% + 40px)',
        top: '0',
        zIndex: '1',
        backgroundColor: 'var(--mediumGrey)',
        padding: '10px 20px',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, .5)',
        marginLeft: '-20px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    createButton: {
        color: 'var(--brightGreen)',
        fontWeight: '600',
        fontSize: '20px',
        backgroundColor: 'var(--transparentBlue)',
        padding: '10px 20px',
        boxShadow: '0px 5px 5px rgba(0, 0, 0, .5)',
        borderRadius: '30px',

        
    },
    pageTitle: {
        color: 'var(--silver)',
        fontSize: '20px'
    },
    settingTitle: {
        color: 'var(--silver)',
        fontSize: '12px',
        marginBottom: '5px',
    },
    settingList: {
        display: 'flex',
        gap: '50px',
    },
    settingItem: {
        backgroundColor: 'var(--transparentBlue)',
        padding: '7px 5px 5px 5px',
        height: '40px',
        borderRadius: '30px',
        width: '80px',
        textAlign: 'center',
        color: 'var(--silver)',
    },
    settingItemSelected: {
        backgroundColor: 'var(--indigo)',
        padding: '7px 5px 5px 5px',
        height: '40px',
        borderRadius: '30px',
        width: '80px',
        textAlign: 'center',
        color: 'var(--silver)',
    },
    rosterTitle: {
        color: 'var(--silver)',
        fontSize: '12px',
        marginBottom: '5px'
    },
};