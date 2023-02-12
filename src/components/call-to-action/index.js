import styled from "styled-components"
import { deviceBreakpoint } from "../../variables"

export const CallToAction = () => {
    return (
        <StyledCallToAction>
            <h1>Learn to code by watching others</h1>

            <p>
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
            but understanding how developers think is invaluable.
            </p>
        </StyledCallToAction>
    )
}

const StyledCallToAction = styled.section`
    max-width: 500px;

    h1 {
        margin-bottom: 3rem;
        line-height: 6rem;
    }

    @media (max-width: ${deviceBreakpoint.tablet}) {
        h1 {
            margin-bottom: 2rem;
            line-height: 3rem;
        }
    }
`