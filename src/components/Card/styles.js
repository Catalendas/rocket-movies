import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.GRAY_PINK};
    padding: 2rem;

    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    > div:nth-child(1) { 
        display: flex;
        flex-direction: column;
        gap: 8px;
        
        span {
            display: flex;
            gap: 6px;

            svg {
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }
    }

    p {
        max-height: 3.25rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        /* white-space: ; */
    }

    > div:nth-child(3) {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`