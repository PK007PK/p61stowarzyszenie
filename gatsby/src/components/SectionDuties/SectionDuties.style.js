import styled from 'styled-components';

export const SectionDutiesStyle = styled.section`
    text-align: center;
    /* border: 1px solid black; */
    padding: var(--cardPadding);
    position: relative;
    box-shadow: ${({ theme }) => theme.elevation.dp1};

    .openBtn {
        cursor: pointer;
    }

    .closeBtn {
        cursor: pointer;
        position: absolute;
        top: -20px;
        right: var(--cardPadding);
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: 1px solid black;
    }

    span {
    }

    .heading1 {
        margin: 25px 0;
    }

    .heading2 {
        margin: 50px 0 25px;
    }

    .links {
        display: flex;
    }

    .link {
        margin-left: var(--spacingRegular);
    }
`;
