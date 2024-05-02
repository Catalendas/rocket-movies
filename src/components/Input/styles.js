import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    gap: 1rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 10px;
    

    > input {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`