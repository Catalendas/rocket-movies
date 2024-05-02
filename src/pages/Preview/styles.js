import styled from "styled-components";

export const Container = styled.div`
    
    > div:nth-child(3) {
        margin: 0 auto;
        width: 1137px;

        margin-top: 24px;

        > div:nth-child(1) {
            display: flex;
            align-items: center;
            gap: 19px;

            h2 {
                font-size: 36px;
            }

            span {
                display: flex;
                align-items: center;
                gap: 10px;

                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }

        > div:nth-child(2) {
            margin-top: 24px;

            display: flex;
            gap: 8px;

            div {
                display: flex;
                align-items: center;
                gap: 8px;

                svg {
                    color: ${({ theme }) => theme.COLORS.PINK};
                }
            }

            
            img {
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
            }
        }

        > div:nth-child(3) {
            display: flex;
            gap: 8px;
            margin-top: 40px;
        }

        > p {
            margin-top: 40px;
            margin-bottom: 156px;
        }
    }
`