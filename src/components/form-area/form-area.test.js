import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { FormArea } from "."

const clickOnSubmitButton = () => {
    const submitButtonElement = screen.getByText(/CLAIM YOUR FREE TRIAL/i)

    userEvent.click(submitButtonElement)
}

const typeIntoForm = ({firstName, lastName, email, password}) => {
    const firstNameInputElement = screen.getByPlaceholderText('First Name')
    const lastNameInputElement = screen.getByPlaceholderText('Last Name')
    const emailInputElement = screen.getByPlaceholderText('Email Address')
    const passwordInputElement = screen.getByPlaceholderText('Password')

    if (firstName) userEvent.type(firstNameInputElement, firstName)
    if (lastName) userEvent.type(lastNameInputElement, lastName)
    if (email) userEvent.type(emailInputElement, email)
    if (password) userEvent.type(passwordInputElement, password)

    return {
        firstNameInputElement,
        lastNameInputElement,
        emailInputElement,
        passwordInputElement
    }
}

const getErrorMessage = () => {
    const firstNameErrorElement = screen.queryByText(/First Name cannot be empty/i)
    const lastNameErrorElement = screen.queryByText(/Last Name cannot be empty/i)
    const emailIsEmptyErrorElement = screen.queryByText(/Email cannot be empty/i)
    const emailIsInvalidErrorElement = screen.queryByText(/Looks like this is not an email/i)
    const passwordIsEmptyErrorElement = screen.queryByText(/Password cannot be empty/i)

    return {
        firstNameErrorElement,
        lastNameErrorElement,
        emailIsEmptyErrorElement,
        emailIsInvalidErrorElement,
        passwordIsEmptyErrorElement
    }
}

beforeEach(() => {
    render(<FormArea />)
})

test("Input should be initially empty", () => {   
    expect(screen.getByPlaceholderText('First Name').value).toEqual("")
    expect(screen.getByPlaceholderText('Last Name').value).toEqual("")
    expect(screen.getByPlaceholderText('Email Address').value).toEqual("")
    expect(screen.getByPlaceholderText('Password').value).toEqual("")
})

describe("Error Handling", () => {
    
    test("Should show first name error if first name input is empty", () => {
        clickOnSubmitButton()

        expect(getErrorMessage().firstNameErrorElement).toBeTruthy()
    })

    test("Should show last name error if last name input is empty", () => {
        clickOnSubmitButton()

        expect(getErrorMessage().lastNameErrorElement).toBeTruthy()
    })

    test("Should show email error if email input is empty", () => {
        clickOnSubmitButton()

        expect(getErrorMessage().emailIsEmptyErrorElement).toBeTruthy()
    })

    test("Should show email error if email is invalid", () => {
        typeIntoForm({ email: 'victorgomesgmail.com'})
        clickOnSubmitButton()

        expect(getErrorMessage().emailIsInvalidErrorElement).toBeTruthy()
    })

    test("Should show password error if password input is empty", () => {
        clickOnSubmitButton()
        expect(getErrorMessage().passwordIsEmptyErrorElement).toBeTruthy()
    })

    test("Should show no erros if every input is valid", () => {
        typeIntoForm({ 
            firstName: 'Victor',
            lastName: 'Gomes',
            email: 'victorgomes@gmail.com',
            password: '123456'
        })

        clickOnSubmitButton()

        expect(getErrorMessage().firstNameIsEmptyErrorElement).toBeFalsy()
        expect(getErrorMessage().lastNameErrorElement).toBeFalsy()
        expect(getErrorMessage().emailIsEmptyErrorElement).toBeFalsy()
        expect(getErrorMessage().emailIsInvalidErrorElement).toBeFalsy()
        expect(getErrorMessage().passwordIsEmptyErrorElement).toBeFalsy()
    })
})

