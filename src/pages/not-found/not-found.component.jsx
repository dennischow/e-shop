import React from "react";
import { Link } from "react-router-dom";

import "./not-found.style.scss";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <div className="container">
                <Link to="/">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
