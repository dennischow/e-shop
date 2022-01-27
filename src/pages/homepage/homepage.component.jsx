import React from "react";

import Layout from "../../components/layout/layout.component";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

import "./homepage.style.scss";

const HomePage = () => {

    return (
        <Layout hasHeader={true} hasFooter={true}>
            <div className="homepage">
                <div className="container">
                    <h1>Home Page</h1>
                    <DirectoryMenu />
                </div>
            </div>
        </Layout>
    )
}

export default HomePage;


