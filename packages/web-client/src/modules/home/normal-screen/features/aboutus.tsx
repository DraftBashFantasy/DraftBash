import React from 'react';

export const AboutusPage = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>About Me</h1>
            <p style={styles.description}>
                Welcome to DraftBash! This application is designed to provide you with a unique fantasy basketball drafting experience. 
                Whether you're exploring player stats, creating mock drafts, or learning strategies, we're here to help make your fantasy league the best it can be.
            </p>
            <p style={styles.description}>
                This project is developed with passion and cutting-edge technology, including React, PostgreSQL, and Docker. Thank you for visiting and being part of the journey!
            </p>
            <p style={styles.description}>
                Feel free to explore the site and reach out if you have any questions or feedback.
            </p>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#dcdcdc', // Light background for better contrast
        borderRadius: '10px', // Rounded edges for a polished look
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        color: '#333', // Dark text for readability
    },
    title: {
        fontSize: '40px', // Larger for emphasis
        fontWeight: 'bold',
        color: '#4A90E2', // Eye-catching color
        textAlign: 'center',
        marginBottom: '20px',
        textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for text depth
    },
    description: {
        fontSize: '20px', // Slightly larger for readability
        lineHeight: '1.8', // Improved line spacing for better readability
        color: '#555', // Softer color for paragraphs
        marginBottom: '20px',
        textAlign: 'justify', // Better alignment for paragraphs
    },
};