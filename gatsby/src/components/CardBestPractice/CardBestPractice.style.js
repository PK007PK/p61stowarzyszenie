import styled from 'styled-components';

export const CardBestPracticeStyle = styled.div`
    margin-bottom: var(--spacingMedium);
    padding: var(--spacingRegular);
    position: relative;
    box-shadow: ${({ theme }) => theme.elevation.dp1};
    background-color: ${({ selected }) => (selected ? 'lightgray' : null)};
    border-radius: 20px;

    .buttonBar {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: -15px;
        left: 0;
        width: 100%;
        padding-left: var(--spacingRegular);
        padding-right: var(--spacingRegular);
    }

    .button {
        font-size: var(--fontSizeXSmall);
        background-color: white;
        border: 1px solid lightgray;
        color: gray;
        flex-grow: 1;

        &:first-child {
            border-radius: 0 0 0 10px;
        }

        &:last-child {
            border-radius: 0 0 10px 0;
        }

        &:hover {
            color: black;
        }
    }
`;
