import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    border-bottom: 1px solid gray;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;

    padding: 30px 123px 30px 123px;

    > form {
        flex: 1;
    }

    > h3 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Profile = styled(Link)`
    display: flex;
    gap: 9px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    > img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`