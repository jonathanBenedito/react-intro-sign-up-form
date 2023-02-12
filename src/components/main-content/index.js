import styled from "styled-components"
import { styleColors } from "../../variables"

export const MainContent = ({children}) => {
    return (
        <StyledMainContent>
            {children}
        </StyledMainContent>
    )
}

const StyledMainContent = styled.main`
    background: url('../images/bg-intro-desktop.png');
    background-color: ${styleColors.primaryColorRed};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    padding: 0 5rem;
`