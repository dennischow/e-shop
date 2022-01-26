import React from "react";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

import "./hats.style.scss";

const HatsPage = () => {
    return (
        <div className="hats">
            <div className="container">
                <h1>Hats Page</h1>
                <DirectoryMenu />
            </div>
        </div>
    );
};

export default HatsPage;
