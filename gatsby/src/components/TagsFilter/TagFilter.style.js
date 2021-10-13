import styled from 'styled-components';

export const TagFilterStyle = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        margin-right: var(--spacingRegular);
        text-decoration: none;

        &:hover {
            color: var(--colorActiveSecondary);
        }
    }
`;
