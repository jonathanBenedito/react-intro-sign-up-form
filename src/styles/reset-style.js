import { createGlobalStyle } from "styled-components"

export const ResetStyle = () => {
    return <StyledResetStyle />
}

const StyledResetStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: black;
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

`