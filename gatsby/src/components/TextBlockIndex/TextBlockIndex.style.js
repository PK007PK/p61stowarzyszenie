import styled from 'styled-components';

export const TextBlockIndexStyle = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    padding: var(--cardPadding);

    ${({ theme }) => theme.media.smAbove} {
        padding: none;
        margin-bottom: 40px;
    }
    .title {
        margin-bottom: 0px;
    }

    .tagBar {
        margin: 30px 0 30px;
        ${({ theme }) => theme.media.mdAbove} {
            display: flex;

            margin-bottom: 0 0 20px 0;
        }
    }
    .tagContainer {
        margin-right: 20px;
        display: flex;
        align-items: center;
        font-weight: 300;
        font-size: 18px;
        flex-wrap: wrap;

        &:first-letter {
            color: var(--colorActiveSecondary);
        }
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
