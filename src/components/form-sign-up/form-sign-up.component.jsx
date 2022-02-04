import React, { useState, useEffect } from "react";
import { auth, createUserProfileDocument, signUpWithEmail } from "../../firebase/firebase.utils";

import "./form-sign-up.style.scss";

const FormSignUp = () => {
    const initialFormData = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
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

        const { displayName, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            alert("password doesnt match");
            return;
        }

        // https://firebase.google.com/docs/auth/web/start
        try {
            signUpWithEmail(auth, email, password).then((userCredential) => {
                const { user } = userCredential;
                createUserProfileDocument(user, { displayName });
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
        <div className="form-sign-up">
            <h1>I do not have an account</h1>
            <p>Sign-up with us</p>
            <form onSubmit={handleSubmission}>
                <fieldset>
                    <p>
                        <label htmlFor="displayName">Name</label>
                        <input id="displayName" name="displayName" type="text" value={formData.displayName} onChange={handleChange} required />
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
                        <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
                    </p>
                    <p>
                        <button type="submit">Sign-Up</button>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default FormSignUp;
