import styled from 'styled-components';

export const StyledLogo2 = styled.div`
    display: flex;
    font-family: Poppins;
    font-style: normal;
    flex-shrink: 0;
    width: ${({ small }) => (small ? '257px' : '257px')};

    .textBlock {
        margin-left: 7px;
    }

    .top {
        font-size: ${({ small }) => (small ? '10px' : '16px')};
        font-weight: 300;
        line-height: ${({ small }) => (small ? '10px' : '16px')};
        letter-spacing: -0.05em;
        text-transform: uppercase;
    }
    .main {
        font-size: ${({ small }) => (small ? '18px' : '33px')};
        font-weight: 900;
        line-height: ${({ small }) => (small ? '18px' : '33px')};
        letter-spacing: -0.03em;
        color: #134c0a;
        color: #00b74a;

        span {
            /* color: #e43b3b; */
            color: #2e7d32;
            color: var(--colorActiveSecondary);
        }
    }

    .bottom {
        font-size: ${({ small }) => (small ? '8px' : '10px')};
        font-weight: 300;
        line-height: 10px;
        letter-spacing: -0.01em;
    }
`;
