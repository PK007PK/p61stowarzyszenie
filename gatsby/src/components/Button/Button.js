import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background-color: ${({ secondary }) => (secondary ? 'var(--colorActiveSecondary)' : 'var(--colorActivePrimary)')};
    color: white;
    padding: var(--spacingSmall) var(--spacingMedium);
    border: none;
    text-shadow: var(--txtShadow);
    font-size: var(--fontSizeLead);
    ${({ full }) =>
        full &&
        `
            width: 100%;
        `}

    .icon {
        margin-right: 5px;
    }
`;
