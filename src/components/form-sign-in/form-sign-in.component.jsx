import React, { useState, useEffect } from "react";

import { auth, signInWithEmail, signInWithGoogle } from "../../firebase/firebase.utils";

import "./form-sign-in.style.scss";

const FormSignIn = () => {
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

    const handleSubmission = async (event) => {
        event.preventDefault();

        const { email, password } = formData;

        try {
            signInWithEmail(auth, email, password).then((userCredential) => {
                const { user } = userCredential.user;
                setFormData(initialFormData);
                console.log(`user: `, user);
                console.log(`Submitted: `, formData);
                console.log(`handleSubmission: `, event.target);
            });
        } catch (error) {
            console.error(error.code);
            console.error(error.message);
        }
    };

    useEffect(() => {
        // console.log(`formData: `, formData);
    });

    return (
        <div className="form-sign-in">
            <h1>Sign-In</h1>
            <p>Existing user return</p>
            <form onSubmit={handleSubmission}>
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
                        <button className="btn-sign-in btn-sign-in--default" type="submit">
                            Sign-In
                        </button>
                        <button className="btn-sign-in btn-sign-in--google" type="button" onClick={signInWithGoogle}>
                            Sign-In with Google
                        </button>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default FormSignIn;
