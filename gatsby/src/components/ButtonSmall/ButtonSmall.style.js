import styled from 'styled-components';

export const ButtonSmallStyle = styled.button`
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
        color: white;
        background-color: black;
        border: 1px solid black;
    }
`;
