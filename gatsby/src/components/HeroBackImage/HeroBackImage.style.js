import styled from 'styled-components';

export const HeroBackImageStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    /* max-height: 840px; */
    width: 100%;
    z-index: -1;
    overflow: hidden;

    .back {
        height: 100%;
        width: 33%;
        position: absolute;
        right: 0;
    }
`;
