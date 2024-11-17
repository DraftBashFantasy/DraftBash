import React from 'react'; 
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const FAQPage: React.FC = () => {
    return (
        <div style={styles.container}>
            <div style={styles.faqHeaderContainer}>
                <Typography variant="h4" gutterBottom style={styles.faqHeader}>
                    Frequently Asked Questions
                </Typography>
            </div>

            <Accordion style={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={styles.accordionSummary}>
                    <Typography variant="h6">What is the purpose of this site?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={styles.bodyText}>
                        This site allows users to participate in mock drafts and improve their drafting skills. Additionally, you are provided day-by-day updates on scores/projections for each player in the 'Players' tab.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={styles.accordionSummary}>
                    <Typography variant="h6">How do I join a mock draft?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={styles.bodyText}>
                        You can join a mock draft by navigating to the 'Mock Drafts' page and selecting a draft to participate in.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={styles.accordionSummary}>
                    <Typography variant="h6">What are the different types of drafts?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={styles.bodyText}>
                        There are two different types of drafts we provide: <br />  <br />
                        <strong>Snake</strong> - The order of picks reverses after each round. If you pick first in Round 1, you pick last in Round 2, and then first again in Round 3, and so on. <br />  <br />
                        <strong>Linear</strong> - The draft order stays the same in every round. If you pick first in Round 1, you also pick first in Round 2, and so on.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={styles.accordionSummary}>
                    <Typography variant="h6">Different scoring types?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={styles.bodyText}>
                        There are two scoring types we provide: <br />  <br />
                        <strong>Points</strong> -In Points scoring, players accumulate fantasy points based on their in-game stats. Each statistical category (e.g., points, rebounds, assists, etc.) is assigned a specific point value, and a player's fantasy score is the sum of these points. <br />  <br />
                        <strong>Category</strong> -In Categories scoring, your team competes against another team in specific statistical categories (like points, rebounds, assists, etc.), and the winner is determined by who wins the most categories at the end of the week.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion style={styles.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} style={styles.accordionSummary}>
                    <Typography variant="h6">Players Tab</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={styles.bodyText}>
                        In the 'Players' tab, we provide an updated statsheet on every player in the NBA and a fantasy outlook after every game. 
                        We also provide 'Seasonal Averages', 'Projected Averages', and the rankings of each player everchanging.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

const styles = {
    container: {
        padding: '30px',
        maxWidth: '800px',
        margin: 'auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    faqHeaderContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    faqHeader: {
        fontSize: '48px', // Larger font size
        fontWeight: 'bold',
        color: 'var(--gold)',  // Gold color for emphasis
        textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',  // Shadow for depth
        letterSpacing: '4px',  // Letter spacing for clarity
    },
    accordion: {
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #e0e0e0',
    },
    accordionSummary: {
        backgroundColor: '#f0f0f0',
        padding: '10px 20px',
    },
    bodyText: {
        fontSize: '16px',
        lineHeight: '1.6',
        margin: '10px 0',
    },
};