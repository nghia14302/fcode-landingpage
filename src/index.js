import React from 'react';

import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <MemoryRouter forceRefresh={false}>
            <App />
        </MemoryRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
