import styled from 'styled-components';

export const SelectGroupStyle = styled.div`
    .title {
    }
    .subtitle {
        margin: 0;
    }
`;

export const StyledButton = styled.button`
    font-size: var(--fontSizeLead);
    cursor: pointer;
    background-color: #b0bec5;
    border: none;
    color: ${({ selected }) => (selected ? `var(--colorWhite)` : 'none')};

    &:first-of-type {
        padding-left: 0;
    }

    &:hover {
        color: var(--colorWhite);
    }
`;
