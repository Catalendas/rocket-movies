import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    border-radius: 10px;

    border: none;
    resize: none;

    padding: 19px 1rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
`