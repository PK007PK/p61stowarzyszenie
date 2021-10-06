import styled from 'styled-components';

export const StyledHeader = styled.header`
    /* background-color: var(--colorMediumGray); */
`;

export const SectionHeroStyle = styled.header`
    display: flex;
    justify-items: center;
    align-items: center;
    height: calc(100vh - 112px);
    /* max-height: 700px; */
    /* padding: var(--spacingRegular); */
    position: relative;

    .firstRow {
        /* margin-bottom: 100px; */
    }

    p {
        margin-top: 0;
    }

    .secondRow {
        position: absolute;
        bottom: 100px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
        box-shadow: ${({ theme }) => theme.elevation.dp1};
        padding: var(--cardPadding);
    }
`;
