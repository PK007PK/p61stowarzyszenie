import styled from 'styled-components';

export const ButtonSmallStyle = styled.button`
    font-size: var(--fontSizeXSmall);
    background-color: white;
    border: 1px solid lightgray;
    color: gray;
    flex-grow: 1;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
        border-radius: 0 0 0 10px;
    }

    &:last-child {
        border-radius: 0 0 10px 0;
    }

    &:hover {
        border-bottom: 1px solid var(--colorActive);
        border-left: 1px solid var(--colorActive);
        border-right: 1px solid var(--colorActive);
    }
`;
