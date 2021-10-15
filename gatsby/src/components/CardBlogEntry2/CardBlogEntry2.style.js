import styled from 'styled-components';

export const CardBlogEntry2Style = styled.div`
    display: flex;
    margin-bottom: var(--spacingMedium);
    position: relative;

    .imgWrapper,
    .picture {
        width: 300px;
        height: 200px;
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
`;
