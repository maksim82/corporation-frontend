import React, {HTMLProps} from 'react';
import { createRoot } from 'react-dom/client';
import {App} from "app/App";
import { BrowserRouter as Router } from "react-router-dom";
import {ErrorBoundary} from "app/provider/ErrorBoundary";
import {ThemeProvider} from "app/provider/ThemeProvider";

import "./app/styles/index.scss";

declare global {
    type SvgIcon = React.FC<HTMLProps<SVGElement>>;
}

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Router>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </Router>
        </ErrorBoundary>
    </React.StrictMode>
);
