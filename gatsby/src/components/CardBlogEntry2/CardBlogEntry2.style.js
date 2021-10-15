import styled from 'styled-components';

export const CardBlogEntry2Style = styled.div`
    position: relative;
    margin-bottom: var(--spacingMedium);

    ${({ theme }) => theme.media.smAbove} {
        display: flex;
        flex-direction: ${({ small }) => (small ? 'column' : 'row')};
    }

    .imgWrapper,
    .picture {
        height: 200px;
        width: 100%;

        ${({ theme }) => theme.media.smAbove} {
            width: ${({ small }) => (small ? '100%' : '300px')};
        }

        background-position: cover;
        flex-shrink: 0;
        border-radius: var(--borderRadius);
    }

    .imgWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .textWrapper {
        padding: var(--cardPadding);
    }

    .title {
        font-size: ${({ small }) => (small ? '15px' : '25px')} !important;
    }
`;
