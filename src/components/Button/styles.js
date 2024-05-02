import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.GRAY_800};
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    border: none;
    border-radius: 10px;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        filter: opacity(70%);
        transition: 0.5s;
    }
`