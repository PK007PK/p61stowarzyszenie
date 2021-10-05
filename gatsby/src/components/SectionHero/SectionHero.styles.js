import styled from 'styled-components';

export const StyledHeader = styled.header`
    /* background-color: var(--colorMediumGray); */
`;

export const SectionHeroStyle = styled.header`
    /* display: flex; */
    justify-items: center;
    align-items: center;
    height: calc(100vh - 72px);
    max-height: 700px;
    padding: var(--spacingRegular);

    p {
        margin-top: 0;
    }
`;
