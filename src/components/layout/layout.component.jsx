import React, { Fragment } from "react";

import Header from "./../header/header.component";
import Footer from "./../footer/footer.component";

import "./layout.style.scss";

const Layout = ({ hasHeader, hasFooter, children }) => {
    return (
        <Fragment>
            <div className="site-layout">
                {hasHeader && <Header />}

                <main className="site-main">{children}</main>

                {hasFooter && <Footer />}
            </div>
        </Fragment>
    );
};

export default Layout;
