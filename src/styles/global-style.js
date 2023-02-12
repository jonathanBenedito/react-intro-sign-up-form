import { createGlobalStyle } from "styled-components"
import { styleColors } from "../variables"

export const GlobalStyle = ({children}) => {
    return <StyledGlobalStyle />
}

const StyledGlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
        font-size: 1.6rem;
        color: ${styleColors.fontColor};
    }
    
    body, input::placeholder {
        font-family: 'Poppins', sans-serif;
    }
    
    input {
        
        border: 1px solid ${styleColors.inputBorderColor};
        padding: 1.5rem 7rem 1.5rem 2rem;
        border-radius: 0.5rem;
        transition: 0.3s ease-in-out;
    }
    
    input::placeholder {
        font-weight: 700;
    }
    
    input:focus:not(input[type=submit]) {
        border-color: ${styleColors.accentColorBlue};
    }

    input, textarea
    {
        margin: 0;
        border: 0;
        padding: 0;
        display: inline-block;
        vertical-align: middle;
        white-space: normal;
        background: none;
        line-height: 1;
        font-size: 13px;
        font-family: 'Roboto', sans-serif;
    }

    input:focus
    {
        outline:0;
    }
    
    h1 {
        font-size: 5rem;
        font-weight: 700;
    }
    
    small {
        font-size: 1rem;
    }

    a {
        text-decoration: none;
        color: black;
    }
`