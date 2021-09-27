import styled from 'styled-components';

export const MainHeadingStyle = styled.div`
    .title {
    }
    .subtitle {
        margin: 0;
    }
`;

export const StyledButton = styled.button`
    font-size: var(--fontSizeLead);
    background-color: ${({ selected }) => (selected ? 'red' : 'none')};
`;
