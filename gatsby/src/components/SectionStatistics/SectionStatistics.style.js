import styled from 'styled-components';

export const SectionStatisticsStyle = styled.section`
    position: relative;
    background-color: #006064;
    padding: var(--spacingBig2) 0 var(--spacingBig1) 0;
    text-align: center;
    p,
    span {
        margin-top: 0;
    }

    .backgroundImage {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.2;
    }

    .cardContainer {
        background-color: white;
        position: relative;
        padding: 50px var(--cardPadding) var(--cardPadding) var(--cardPadding);
        border: 1px solid gray;
        background-color: #cfd8dc;

        .iconContainer {
            position: absolute;
            top: -30px;
            right: 50%;
            background-color: #cfd8dc;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateX(50%);
            border: 1px solid gray;
        }

        .icon {
            font-size: 25px;
        }

        .number {
            font-size: var(--fontSizeBig3);
            color: var(--colorActiveSecondary);
            color: white;
            font-weight: 300;
            text-shadow: var(--txtShadow);
        }
    }
`;
