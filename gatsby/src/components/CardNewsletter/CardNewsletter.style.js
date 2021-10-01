import styled from 'styled-components';

export const CardNewsletterStyle = styled.button`
    padding: var(--cardPadding);
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    font-size: var(--fontSizeBig1);
    border: none;
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 100px;
    /* background-color: orange; */

    &:hover,
    &:focus {
        box-shadow: ${({ theme }) => theme.elevation.dp4};
    }

    .newsletter {
        transition: var(--transitionFast);
        position: relative;
        outline: none;
        background-color: var(--darkTxt);
        color: var(--offWhite);

        &:after {
            background-color: var(--lightGray);
        }
    }

    .newsletter::after {
        transition: var(--transitionFast);
        content: '';
        position: absolute;
        width: 100%;
        height: 10px;
        bottom: 0;
        right: 0;
        opacity: 0;
    }

    .login:hover::after,
    .login:focus::after,
    .newsletter:hover::after,
    .newsletter:focus::after {
        opacity: 1;
    }

    .login {
        background-color: var(--lightGray);
        color: black;

        &:after {
            background-color: var(--darkTxt);
        }
    }

    h3 {
        color: white !important;
    }

    .tileWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
    }

    .icon {
        font-size: var(--fontSizeBigX1);
        margin-right: var(--spacingSmall);
        margin-bottom: 3px;
    }
`;
