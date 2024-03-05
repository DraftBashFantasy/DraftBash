import React, { useState } from 'react';
import { PageFrame } from '../../shared';
import PickList from '../../shared/components/lists/PickList';

export function CreateMockDraftsPage() {

    return (
        <PageFrame>
            <h1 style={styles.header}>Draft Creation</h1>
            <p style={styles.headerSubtext}>Set your draft settings below</p>
            <div>
                <input type="radio" value="snake" />
                <input type="radio" value="linear" />
            </div>
            <div>
                <PickList
                    itemList={['item1', 'item2']}
                    defaultValue="item1"
                    setValue={function (item: string | number): void {
                        console.log(item);
                    }}
                />
            </div>
        </PageFrame>
    );
}

const styles = {
    header: {
        fontSize: '24px',
    } as React.CSSProperties,
    headerSubtext: {
        borderBottom: 'lightGrey 2px solid'
    } as React.CSSProperties,
};