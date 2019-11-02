import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
    render() {
        return (
            // Change <> to div with className?
            <div className="not-found">
                <h1>404</h1>
                <h2>The Classic Page Not Found.</h2>
                <p>Go you.</p>
                <Link to="/">Back to civilization</Link>
            </div>
        );
    }
}

export default NotFoundPage;