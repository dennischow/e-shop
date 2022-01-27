import React from "react";

import "./footer.style.scss";

const Header = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <small className="date">
                    {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
};

export default Header;
