import styled from 'styled-components';

export const CardBlogEntryStyle = styled.div`
    /* background-color: darkgrey; */
    /* padding: var(--spacingRegular);
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 5px; */
    display: flex;
    margin-bottom: var(--spacingRegular);
    height: var(--cardHeight);

    .picture {
        height: var(--cardHeight);
        width: var(--cardHeight);
        flex-shrink: 0;
    }

    .txtBlock {
        padding: var(--spacingRegular);
    }
`;
