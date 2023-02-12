import { useState } from "react"
import styled, { css } from "styled-components"
import validator from "validator"
import { styleColors } from "../../variables"

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
                            />
                            <ErrorIcon thereAnyErrors={!errors.firstName === ""} />
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
                            />
                            <ErrorIcon />
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
                            />
                            <ErrorIcon />
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
                            />
                            <ErrorIcon />
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
                    By clicking the button, you are agreeing to our <a href="">Terms and Services</a>
                </TermsServicesWarning> 
            </Card>

        </StyledFormArea>
    )
}

const StyledFormArea = styled.section`
    text-align: center;
    max-width: 450px;
`

const TryButton = styled.a`
    background-color: ${styleColors.accentColorBlue};
    color: ${styleColors.fontColor};
    width: 100%;
    display: block;
    padding: 1.5rem 3rem;
    font-weight: 400;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    box-shadow: ${styleColors.boxShadowColor} 0px 7px;
    border-radius: 1rem;

    b {
        font-weight: 600;
    }
`

const Card = styled.div`
    box-shadow: ${styleColors.boxShadowColor} 0px 7px;
    border-radius: 1rem;
    background-color: ${styleColors.cardBackgroundColor};
    padding: 3rem;   
`

const Field = styled.div`
    margin-bottom: 2rem;
    text-align: right;
`

const InputArea = styled.div`
    position: relative;
    margin-bottom: 0.5rem;
`

const Input = styled.input`
    width: 100%;
`

const ErrorIcon = styled.span`
     ${props => props.thereAnyErrors && css`
        background: url('../images/icon-error.svg') center center no-repeat;
        background-size: contain;
        content: '';
        width: 24px;
        height: 24px;
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translate(-50%, -50%);
    `}
`

const InputFeedback = styled.small`
    color: ${styleColors.primaryColorRed};
    font-style: italic;
    font-weight: 500;
`

const SubmitButton = styled.input`
    background-color: ${styleColors.primaryColorGreen};
    text-transform: uppercase; 
    color: ${styleColors.fontColor};
    font-weight: 600;
    font-size: 1.4rem;  
    border-bottom: 3px solid ${styleColors.submitBorderColor};
    padding-bottom: 1.5rem;
    padding-top: 2rem;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
    cursor: pointer;
    position: relative;
    width: 100%;

    &:hover {
        background-color: ${styleColors.submitHoverBackgroundColor};
        border-bottom-color: ${styleColors.submitHoverBorderColor};
    }
`
const TermsServicesWarning = styled.p`
    color: ${styleColors.neutralColorGrayishBlue};
    font-weight: 500;
    font-size: 1rem;
    padding: 0 2.4rem;
    line-height: 1.8rem;

    a {
        color: ${styleColors.primaryColorRed};
        font-weight: 700;
    }
`

