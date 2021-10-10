import styled from 'styled-components';

export const StyledHeader = styled.header`
    /* background-color: var(--colorMediumGray); */
`;

export const SectionHeroStyle = styled.header`
    display: flex;
    justify-items: center;
    align-items: center;
    position: relative;

    ${({ theme }) => theme.media.smAbove} {
        height: calc(100vh - 112px);
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
