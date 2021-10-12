import styled from 'styled-components';

export const SocialShareStyle = styled.div`
    border: 1px solid gray;
    padding: var(--cardPadding) var(--cardPadding) 10px;
    text-align: center;
    .social__button:hover:not(:active) {
        opacity: 0.75;
    }

    .iconBar {
        margin-top: var(--spacingSmall);
        display: flex;
        justify-content: space-between;
    }
`;
