import styled from "styled-components";

export const Container = styled.div`

    height: 52.5rem;

    header {    
        display: flex;
        align-items: center;
        height: 9rem;
        padding: 0 9rem 0 9rem ;
        background-color: ${({ theme }) => theme.COLORS.GRAY_PINK};


        a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`

export const Form = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    width: 21.25rem;

    > div:nth-child(2), > div:nth-child(3){
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
    }
`

export const Avatar = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -100px;
    

    > img {
        border-radius: 50%;
        width: 11.625rem;
        height: 11.625rem;
    }

    > label {
        position: absolute;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.GRAY_900};
        padding: 0.875rem;
        border-radius: 50%;
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;

        top: 150px;
        left: 190px;

        > input {
            display: none;
        }
    }
`
