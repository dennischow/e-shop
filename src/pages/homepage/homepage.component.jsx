import React from "react";

import DirectoryMenu from "../../components/directory-menu/directory-menu.component";

import "./homepage.style.scss";

const HomePage = () => {

    return (
        <div className="homepage">
            <div className="container">
                <h1>Home Page</h1>
                <DirectoryMenu />
            </div>
        </div>
    )
}

export default HomePage;


