import styled from 'styled-components';

export const HeroBreakingNewsStyle = styled.div`
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;

    .card {
        display: inline-block;
        padding: var(--cardPadding);
        background-color: rgba(255, 255, 255, 0.8);
        box-shadow: var(--hoverShadow);
        font-weight: 100;
    }
`;
