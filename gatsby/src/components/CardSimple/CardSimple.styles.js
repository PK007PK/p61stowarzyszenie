import styled from 'styled-components';

export const CardSimpleStyles = styled.div`
    /* padding: var(--spacingRegular); */
    /* height: var(--cardHeight); */
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;

    .picture {
    }

    .textBlock {
        padding: var(--cardPadding);
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 170px;
        box-shadow: var(--shadowBackground2);
        color: white;
        display: flex;
        align-items: center;
    }
`;
