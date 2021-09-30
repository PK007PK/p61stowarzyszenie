import styled from 'styled-components';

export const CardBlogEntryStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--spacingRegular);
    box-shadow: ${({ theme }) => theme.elevation.dp1};

    .imageBar {
        position: relative;
        overflow: hidden;
    }

    .picture {
        height: var(--cardHeight);
        width: 100%;
        transition: var(--transitionBasic);
        &:hover {
            transform: scale(1.02);
        }
    }

    .titleBar {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: var(--cardPadding);
        width: 100%;
        color: white;
        box-shadow: var(--shadowBackground);
    }

    .title {
    }

    .time {
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: black;
        color: white;
        padding: var(--spacingXSmall) var(--cardPadding);
    }

    .txtBlock {
        padding: var(--spacingRegular);
    }
`;
