import styled from "styled-components";

export const Form = styled.form`
    width: 1137px;
    margin: 24px auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    overflow-y: auto;

    > div:nth-child(2) {
        display: flex;
        gap: 2.5rem;
    }

    > div:nth-child(4) {
        display: flex;
        flex-direction: column;
        gap: 24px;

        h3 {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        > div {
            gap: 24px;
            border-radius: 10px;
            padding: 1rem;

            background-color: ${({ theme }) => theme.COLORS.BLACK};
            display: flex;
        }
    }

    > div:nth-child(5) {
        display: flex;
        gap: 40px;

        .delete-button {
            color: ${({ theme }) => theme.COLORS.PINK};
            background-color: ${({ theme }) => theme.COLORS.BLACK};
        }
    }

    .tags {
        color: ${({ theme }) => theme.COLORS.PINK};
        /* background-color: ${({ theme }) => theme.COLORS.GRAY_800}; */
    }

    .tags-new {
        background-color: transparent;
        border: dashed;
        border-color: ${({ theme }) => theme.COLORS.GRAY_300};
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
`

