import styled from 'styled-components';

export const SectionOurProjectsStyles = styled.div`
    padding: var(--spacingBig1) 0 var(--spacingBig1);
    overflow: hidden;

    .cardContainer {
        margin-top: var(--spacingMedium);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }
`;
