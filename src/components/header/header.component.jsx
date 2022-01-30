import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/app-context";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import "./header.style.scss";

const Header = () => {
    const { isLoggedIn } = useContext(AppContext);

    return (
        <header className="site-header">
            <div className="container">
                <Link className="branding" to="/">
                    <Logo className="branding-logo" />
                </Link>
                <nav className="options">
                    <Link className="options-link" to="/">
                        Home
                    </Link>
                    <Link className="options-link" to="/shop">
                        Shop
                    </Link>
                    {isLoggedIn ? (
                        <a className="options-link" onClick={() => auth.signOut()}>
                            Sign-Out
                        </a>
                    ) : (
                        <Link className="options-link" to="/sign-in">
                            Sign-In
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
