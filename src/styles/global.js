import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;
    }

    &::-webkit-scrollbar {
        width: 12px
    }

    &::-webkit-scrollbar-track {
        background: transparent;       
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 20px;  
    }
`