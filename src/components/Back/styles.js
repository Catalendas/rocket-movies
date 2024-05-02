import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    

    margin: 0 auto;
    width: 1137px;
    margin-top: 47px;

    > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`