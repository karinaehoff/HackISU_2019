import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Custom Imports
import AppRoutes from './components/AppRoutes';
// import App from './components/App';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById("root"));
}

// ReactDOM.render(<App />, window.document.getElementById('root'));