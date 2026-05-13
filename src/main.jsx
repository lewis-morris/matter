import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import App from "./App.jsx";
import "./styles.css";
import { GameEngineProvider } from "./context/GameEngineContext.jsx";
import { engine as MatterEngine, create_element as createElement, create_constraint as createConstraint } from "./matter_base.js";

if (typeof window !== "undefined") {
    window.engine = MatterEngine;
    window.create_element = createElement;
    window.create_constraint = createConstraint;
    if (typeof window.matter_engine === "undefined") {
        window.matter_engine = null;
    }
    if (typeof window.event_function === "undefined") {
        window.event_function = null;
    }
    if (typeof window.goal_el === "undefined") {
        window.goal_el = null;
    }
}

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ff9800"
        },
        secondary: {
            main: "#ff5722"
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e"
        }
    },
    shape: {
        borderRadius: 12
    }
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GameEngineProvider>
                <App />
            </GameEngineProvider>
        </ThemeProvider>
    </React.StrictMode>
);
