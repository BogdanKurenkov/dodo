import styled from "styled-components";

export const StyledPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    
    & > main {
        margin-top: 100px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    @media(max-width:500px){
        & > main {
            margin-top: 82px;
        }
    }
`