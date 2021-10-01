import styled from 'styled-components';

export const CardBestPracticeStyle = styled.div`
    margin-bottom: var(--spacingMedium);
    padding: var(--spacingRegular);
    position: relative;
    box-shadow: ${({ theme }) => theme.elevation.dp1};

    .buttonBar {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: -21px;
        left: 0;
        width: 100%;
        padding-left: var(--spacingRegular);
        padding-right: var(--spacingRegular);
    }
`;
