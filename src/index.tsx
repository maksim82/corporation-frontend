import React from 'react';
import { createRoot } from 'react-dom/client';
import {App} from "app/App";
import { BrowserRouter as Router } from "react-router-dom";
import {ErrorBoundary} from "app/provider/ErrorBoundary";

import "./app/styles/index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </React.StrictMode>
);
