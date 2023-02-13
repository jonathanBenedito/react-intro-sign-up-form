import { useState } from "react"
import validator from "validator"
import {
    StyledFormArea,
    TryButton,
    Card,
    Field,
    InputArea,
    Input,
    ErrorIcon,
    InputFeedback,
    SubmitButton,
    TermsServicesWarning
} from './style.js'

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
        password: "",
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
        <StyledFormArea>

            <TryButton href="">
                <b>Try it free 7 days</b> then $20/mo. thereafter
            </TryButton>

            <Card>
                <form onSubmit={validateForm} noValidate>

                    <Field>
                        <InputArea>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={signupInput.firstName}
                                onChange={handleChange}
                                thereAnyErrors={errors.firstName !== ""}
                            />
                            <ErrorIcon thereAnyErrors={errors.firstName !== ""} />
                        </InputArea>
                        <InputFeedback>{errors.firstName}</InputFeedback>
                    </Field>

                    <Field>
                        <InputArea>
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={signupInput.lastName}
                                onChange={handleChange}
                                thereAnyErrors={errors.lastName !== ""}
                            />
                            <ErrorIcon thereAnyErrors={errors.lastName !== ""} />
                        </InputArea>
                        <InputFeedback>{errors.lastName}</InputFeedback>
                    </Field>

                    <Field>
                        <InputArea>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={signupInput.email}
                                onChange={handleChange}
                                thereAnyErrors={errors.email !== ""}
                            />
                            <ErrorIcon thereAnyErrors={errors.email !== ""} />
                        </InputArea>
                        <InputFeedback>{errors.email}</InputFeedback>
                    </Field>

                    <Field>
                        <InputArea>
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                autocomplete="on"
                                value={signupInput.password}
                                onChange={handleChange}
                                thereAnyErrors={errors.password !== ""}
                            />
                            <ErrorIcon thereAnyErrors={errors.password !== ""} />
                        </InputArea>
                        <InputFeedback>{errors.password}</InputFeedback>
                    </Field>

                    <SubmitButton 
                        type="submit"
                        value="Claim your free trial"
                        name="submit"
                    />

                </form>

                <TermsServicesWarning>
                    By clicking the button, you are agreeing to our <span>Terms and Services</span>
                </TermsServicesWarning> 
            </Card>

        </StyledFormArea>
    )
}



