import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [currentAlignment, setCurrentAlignment] =
        React.useState("center");

    return (
        <div style={{ display: "block", padding: 30 }}>
            <h1 style={{ color: "green" }}>
                GeeksforGeeks
            </h1>
            <h4>
                How to use ToggleGroup Component in ReactJS?
            </h4>
            <ToggleButtonGroup
                value={currentAlignment}
                onChange={(event, newAlignment) => {
                    setCurrentAlignment(newAlignment);
                }}
                exclusive
                aria-label="Demo Text Alignment"
            >
                <ToggleButton
                    value="justify"
                    aria-label="justified"
                    disabled
                >
                    <FormatAlignJustify />
                </ToggleButton>
                <ToggleButton
                    value="left"
                    aria-label="left aligned"
                >
                    <FormatAlignLeft />
                </ToggleButton>
                <ToggleButton
                    value="center"
                    aria-label="centered"
                >
                    <FormatAlignCenter />
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
}

const buttons = ReactDOM.createRoot(document.getElementById('buttons'))
buttons.render(<App></App>)
