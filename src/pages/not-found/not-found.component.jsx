import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./not-found.style.scss";

const NotFoundPage = () => {
    const history = useHistory();

    return (
        <div className="not-found">
            <div className="container">
                <h1>404 Page Not Found</h1>
                <button onClick={() => history.push("/")}>Back to Home Button</button>
                <br />
                <Link to="/">Back to Home Link</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
