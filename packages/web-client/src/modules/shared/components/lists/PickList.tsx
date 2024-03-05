import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
    itemList: (string | number)[]; // Array of items to display in the pick list
    defaultValue?: string | number; // Default value for the pick list
    width?: number; // Width of the input field
    setValue: (item: string | number) => void; // Function to handle setting the selected value
}

const PickList: React.FC<Props> = ({ itemList, defaultValue, width = 100, setValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | number | null>(null);
    const [selectedItem, setSelectedItem] = useState<string | number | null| undefined>(defaultValue);
    const listRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const arrowRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            listRef.current &&
            !listRef.current.contains(event.target as Node) &&
            inputRef.current &&
            !inputRef.current.contains(event.target as Node) &&
            arrowRef.current &&
            !arrowRef.current.contains(event.target as Node)
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={styles.pickList} ref={listRef} className="pick-list">
            <div style={styles.inputContainer} onClick={() => setIsOpen(!isOpen)} className="input">
                <input
                    readOnly
                    style={{ ...styles.input, width: `${width}px` }}
                    type="text"
                    value={selectedItem as string}
                    ref={inputRef}
                />
                <div ref={arrowRef}>
                    <FaChevronDown style={styles.chevronDown} className="chevron-down" />
                </div>
            </div>
            {isOpen && (
                <ul style={{ ...styles.ul, width: `${width + 30}px` }}>
                    {itemList.map((item: any, index: number) => (
                        <li
                            style={{
                                ...styles.li,
                                backgroundColor: (hoveredItem === item || selectedItem === item) ? 'var(--lightGrey)' : 'transparent',
                            }}
                            onMouseEnter={() => setHoveredItem(item)}
                            onMouseLeave={() => setHoveredItem(null)}
                            onClick={() => {
                                setSelectedItem(item);
                                setIsOpen(false);
                            }}
                            key={index}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const styles = {
    pickList: {
        position: 'relative',
    },
    inputContainer: {
        display: 'flex',
    },
    input: {
        border: '2px solid var(--mediumGrey)',
        borderRight: 'none',
        height: '30px',
        fontSize: '16px',
        paddingLeft: '8px',
        outline: 'none',
        cursor: 'pointer',
    },
    ul: {
        position: 'absolute',
        backgroundColor: 'white',
        border: '1px solid black',
        maxHeight: '200px',
        overflow: 'auto',
        zIndex: 10,
    },
    li: {
        padding: '1px 6px',
        cursor: 'pointer',
        transition: '0.3s',
    },
    chevronDown: {
        backgroundColor: 'white',
        height: '30px',
        width: '30px',
        color: 'var(--darkGrey)',
        border: '2px solid var(--mediumGrey)',
        padding: '8px',
        borderLeft: 'none',
        cursor: 'pointer',
    },
};

export default PickList;