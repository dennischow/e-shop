import React from "react";

import Layout from "../../components/layout/layout.component";
import FormSignIn from "../../components/form-sign-in/form-sign-in.component";
import FormSignUp from "../../components/form-sign-up/form-sign-up.component";

import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUp = () => {
    return (
        <Layout hasHeader={true} hasFooter={true}>
            <div className="sign-in">
                <div className="container">
                    <div className="group-wrapper">
                        <div className="group-content group-content--sign-in">
                            <FormSignIn />
                        </div>
                        <div className="group-content group-content--sign-up">
                            <FormSignUp />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SignInAndSignUp;
