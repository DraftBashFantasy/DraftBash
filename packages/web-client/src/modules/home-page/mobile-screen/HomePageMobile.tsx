import React from "react";
import { MockDraftsButton } from "./components/MockDraftsButton";

export function HomePageMobile() {

    return (
        <div style={styles.homePage}>
            <MockDraftsButton />
        </div>);
}

const styles = {
    homePage: {
        padding: '10px 5px 10px 5px'
    }
};
