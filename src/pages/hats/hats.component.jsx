import React from "react";

import Layout from "../../components/layout/layout.component";
import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

import "./hats.style.scss";

const HatsPage = () => {
    return (
        <Layout hasHeader={true} hasFooter={true}>
            <div className="hats">
                <div className="container">
                    <h1>Hats Page</h1>
                    <DirectoryMenu />
                </div>
            </div>
        </Layout>
    );
};

export default HatsPage;
