import React, { useState, useEffect } from "react";

import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUp = () => {
    const initialFormData = {
        email: "",
        password: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (event) => {
        event.preventDefault();

        const { value, name } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        setFormData(initialFormData);
        console.log(`Submitted: `, formData);
        console.log(`handleSubmission: `, event.target);
    };

    useEffect(() => {
        console.log(`formData: `, formData);
    });

    return (
        <div className="sign-in">
            <div className="container">
                <h1>Sign-In & Sign-Up</h1>
                <div className="group-wrapper">
                    <div className="group-content group-content--sign-in">
                        <form className="form" onSubmit={handleSubmission}>
                            <fieldset>
                                <p>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                </p>
                                <p>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
                                </p>
                                <p>
                                    <button type="submit">Sign-In</button>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                    {/* <div className="group-content group-content--sign-up">
                        <form className="form" onSubmit={handleSubmission}>
                            <fieldset>
                                <p>
                                    <label htmlFor="name">Name</label>
                                    <input id="name" name="name" type="text" value={formData.email} onChange={handleChange} required />
                                </p>
                                <p>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                                </p>
                                <p>
                                    <label htmlFor="password">Password</label>
                                    <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
                                </p>
                                <p>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input id="confirmPassword" name="confirmPassword" type="password" value={formData.password} onChange={handleChange} required />
                                </p>
                                <p>
                                    <button type="submit">Sign-In</button>
                                </p>
                            </fieldset>
                        </form>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SignInAndSignUp;
