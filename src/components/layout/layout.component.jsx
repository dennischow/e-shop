import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";

import Header from "./../header/header.component";
import Footer from "./../footer/footer.component";

import "./layout.style.scss";

const Layout = ({ hasHeader, hasFooter, children }) => {
    return (
        <Fragment>
            <Helmet>
                <html lang="en" />
                <meta http-equiv="expires" content="0" />
                <meta http-equiv="pragma" content="no-cache" />
                <meta http-equiv="cache-control" content="no-cache" />
            </Helmet>
            <div className="site-layout">
                {hasHeader && <Header />}

                <main className="site-main">{children}</main>

                {hasFooter && <Footer />}
            </div>
        </Fragment>
    );
};

export default Layout;
