import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// Custom imports
import initState from './init-state';
import reducer from './reducer';

// Create empty context
export const AppDispatchContext = createContext(() => {});

// Create context from initial state
export const AppStateContext = createContext(initState);

function AppStateProvider({ children }) {
    // ability to use state in functions
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        // Render Dispatch, State, and Children
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateProvider value={state}>
                {children}
            </AppStateProvider>
        </AppDispatchContext.Provider>
    );
};

// Set children prop
AppStateProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export default AppStateProvider;