import { useState } from "react"
import styled from "styled-components"
import './style.css'
import validator from "validator"

export const FormArea = () => {

    const [signupInput, setSignInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setSignInput({
            ...signupInput,
            [e.target.name]: e.target.value,
        })
    }

    function validateEmail(email) {
        if(!email) return "Email cannot be empty"
        
        return validator.isEmail(email) ? "" : "Looks like this is not an email"
    }

    function validateForm(event) {
        event.preventDefault();

        setErrors({
            firstName: signupInput.firstName ? "" : "First Name cannot be empty",
            lastName: signupInput.lastName ? "" : "Last Name cannot be empty",
            email: validateEmail(signupInput.email),
            password: signupInput.password ? "" : "Password cannot be empty"
        })
    }

    return (
        <section className="form-area">
            <a href="" className="try-button">
                <b>Try it free 7 days</b> then $20/mo. thereafter
            </a>

            <div className="card">
                <form onSubmit={validateForm} noValidate>
                <div className="field">
                    <div className="input-area">
                    <input
                        className="sign-input"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={signupInput.firstName}
                        onChange={handleChange}
                    />
                    <span className="error-icon"></span>
                    </div>
                    <small className="input-feedback">{errors.firstName}</small>
                </div>

                <div className="field">
                    <div className="input-area">
                    <input
                        className="sign-input"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={signupInput.lastName}
                        onChange={handleChange}
                    />
                    <span className="error-icon"></span>
                    </div>
                    <small className="input-feedback">{errors.lastName}</small>
                </div>

                <div className="field">
                    <div className="input-area">
                    <input
                        className="sign-input"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={signupInput.email}
                        onChange={handleChange}
                    />
                    <span className="error-icon"></span>
                    </div>
                    <small className="input-feedback">{errors.email}</small>
                </div>

                <div className="field">
                    <div className="input-area">
                    <input
                        className="sign-input"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autocomplete="on"
                        value={signupInput.password}
                        onChange={handleChange}
                    />
                    <span className="error-icon"></span>
                    </div>
                    <small className="input-feedback">{errors.password}</small>
                </div>

                <input className="submit-button" type="submit" value="Claim your free trial" name="submit" />
                </form>

                <p className="terms-services-warning">
                By clicking the button, you are agreeing to our <a href="">Terms and Services</a>
                </p>
            </div>
        </section>
    )
}