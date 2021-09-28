import styled from 'styled-components';

export const CardBlogEntryStyle = styled.div`
    display: flex;
    margin-bottom: var(--spacingRegular);
    height: var(--cardHeight);

    .picture {
        height: var(--cardHeight);
        width: 380px;
        flex-shrink: 0;
    }

    .txtBlock {
        padding: var(--spacingRegular);
    }
`;
