import styled from 'styled-components';

export const TextBlockIndexStyle = styled.div`
    margin-bottom: 100px;
    .title {
        margin-bottom: 0px;
    }

    .tagBar {
        display: flex;
        margin-bottom: 20px;
    }

    .tagContainer {
        margin-right: 20px;
        display: flex;
        align-items: center;
        font-weight: 300;
        font-size: 18px;
        /* color: var(--colorActivePrimary); */
    }

    .hash {
        color: var(--colorActiveSecondary);
        /* font-size: 30px;
        font-weight: 300; */
    }

    .bottomButtonsBar {
        display: flex;
    }

    .bottomBtn {
        color: white;
    }

    .pdfIcon {
        height: 25px;
    }
`;
