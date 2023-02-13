import { deviceBreakpoint, styleColors } from "../../variables"
import styled, { css } from "styled-components"

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

    @media (max-width: ${deviceBreakpoint.tablet}) {
        padding: 1.5rem 5rem;
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1.4rem;
    }

    @media (max-width: ${deviceBreakpoint.mobile}) {
        padding: 1.5rem 5rem;
        font-weight: 400;
        margin-bottom: 2rem;
        font-size: 1.6rem;
    }
`

const Card = styled.div`
    box-shadow: ${styleColors.boxShadowColor} 0px 7px;
    border-radius: 1rem;
    background-color: ${styleColors.cardBackgroundColor};
    padding: 3rem;   

    @media (max-width: ${deviceBreakpoint.tablet}) {
        padding: 2rem;
    }
`

const Field = styled.div`
    margin-bottom: 2rem;
    text-align: right;
`

const InputArea = styled.div`
    position: relative;
`

const Input = styled.input`
    width: 100%;
    
    ${props => props.thereAnyErrors && css` 
        border-color: ${styleColors.primaryColorRed};
    `}
    
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
    padding: 2rem 0 1.5rem 0;
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

    span {
        color: ${styleColors.primaryColorRed};
        font-weight: 700;
        cursor: pointer;
    }
`

export {
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
}