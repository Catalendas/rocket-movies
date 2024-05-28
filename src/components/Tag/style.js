import styled from "styled-components";

export const Container = styled.span`
    padding: 5px 16px;
    border-radius: 10px;
    background-color: ${({ theme, isNew }) => !isNew && theme.COLORS.GRAY_800};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    border: ${({ isNew }) => isNew && "dashed"};

    > input {
        background: none;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        width: 100%;
    }
`

export const Button = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;
`