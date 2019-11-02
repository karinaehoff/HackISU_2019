import React from 'react';
import { hot } from 'react-hot-loader';

// Custom Imports
import AppContent from '../AppContent';
import AppStateProvider from './AppStateProvider';

// Add CSS?

// Returns AppStateProver and AppContent
function App() {
    return (
        <AppStateProvider>
            <AppContent />
        </AppStateProvider>
    );
};

// What
export default module.hot ? hot(module)(App) : App;