import React from "react";
import { Link, useHistory } from "react-router-dom";

import Layout from "../../components/layout/layout.component";

import "./not-found.style.scss";

const NotFoundPage = () => {
    const history = useHistory();

    return (
        <Layout hasHeader={true} hasFooter={true}>
            <div className="not-found">
                <div className="container">
                    <h1>404 Page Not Found</h1>
                    <button onClick={() => history.push("/")}>Back to Home useHistory</button>
                    <br />
                    <Link to="/">Back to Home Link</Link>
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
