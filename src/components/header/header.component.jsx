import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { AppContext } from "../../context/app-context";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.style.scss";

const Header = ({ currentUser, cartHidden }) => {
    return (
        <header className="site-header">
            <div className="container">
                <Link className="branding" to="/">
                    <Logo className="branding-logo" />
                </Link>
                <nav className="options options--pages">
                    <Link className="options-link" to="/">
                        Home
                    </Link>
                    <Link className="options-link" to="/shop">
                        Shop
                    </Link>
                </nav>
                <nav className="options options--controls">
                    {currentUser ? (
                        <Fragment>
                            <a className="options-link">Hello {currentUser.displayName}</a>
                            <a className="options-link options-link--admission" onClick={() => auth.signOut()}>
                                Sign-Out
                            </a>
                            <CartIcon />
                        </Fragment>
                    ) : (
                        <Link className="options-link options-link--admission" to="/sign-in">
                            Sign-In
                        </Link>
                    )}
                    {cartHidden ? null : <CartDropdown />}
                </nav>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
