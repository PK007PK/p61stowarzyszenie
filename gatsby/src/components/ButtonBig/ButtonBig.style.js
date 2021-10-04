import styled from 'styled-components';

export const ButtonBigStyle = styled.button`
    padding: var(--cardPadding);
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    font-size: var(--fontSizeBig1);
    border: none;
    text-align: center;
    cursor: pointer;
    width: 100%;
    height: 100px;
    background-color: var(--colorActive);
    color: white;
    text-shadow: var(--txtShadow);

    &:hover,
    &:focus {
        box-shadow: ${({ theme }) => theme.elevation.dp4};
    }

    .innerWrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
    }

    .icon {
        font-size: var(--fontSizeBigX1);
        margin-right: var(--spacingSmall);
        margin-bottom: 3px;
        text-shadow: var(--txtShadow);
    }
`;
