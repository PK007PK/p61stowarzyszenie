import styled from 'styled-components';

export const NewsletterStyle = styled.div`
    text-align: center;
    padding: var(--cardPadding);
    position: relative;
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    margin-bottom: var(--spacingMedium);

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

    .heading1 {
        margin: 25px 0;
    }

    .heading2 {
        margin: 50px 0 25px;
    }
`;

export const CustomFormStyle = styled.div``;
