import styled from "styled-components";

export const Container = styled.span`
    padding: 5px 16px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`