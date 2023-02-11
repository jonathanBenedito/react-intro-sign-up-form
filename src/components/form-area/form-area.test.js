import { render, screen } from "@testing-library/react"
import { FormArea } from "."

test ("input should be initially empty", () => {
    render(<FormArea />)

    expect(screen.getByPlaceholderText('First Name').value).toEqual("")
    expect(screen.getByPlaceholderText('Last Name').value).toEqual("")
    expect(screen.getByPlaceholderText('Email Address').value).toEqual("")
    expect(screen.getByPlaceholderText('Password').value).toEqual("")
})