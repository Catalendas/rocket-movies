import styled from "styled-components";

export const Container = styled.div`
    max-height: 64rem;

    display: flex;
    justify-content: space-between;

    img {
        height: 100%;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin: 0 auto;
        width: 21.25rem;      
        gap: 3rem;

        > a {
            margin: 0 auto;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 3rem;
        }

    > p {
        font-size: 0.875rem;
    } 
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    > h3 {
        margin-bottom: 3rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    > button {
        margin-top: 1.5rem;
    }
    /* align-items: center; */
    /* justify-content: ; */
`