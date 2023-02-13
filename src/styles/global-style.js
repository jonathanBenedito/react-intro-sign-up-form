import { createGlobalStyle } from "styled-components"
import { deviceBreakpoint, styleColors } from "../variables"

export const GlobalStyle = () => {
    return <StyledGlobalStyle />
}

const StyledGlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
    }

    input:focus
    {
        outline:0;
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
  
    h1 {
        font-size: 5rem;
        font-weight: 700;
    }
    
    small {
        font-size: 1rem;
    }

    @media (max-width: ${deviceBreakpoint.tablet}) {
        h1 {
            font-size: 2.5rem;
        }
    }
`