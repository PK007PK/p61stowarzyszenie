import { createGlobalStyle } from 'styled-components';

const colors = `
    --colorWhite: #FFFFFF;
    --colorLightGray: #F4F4F4;
    --colorMediumGray: #E9ECEF;
    --colorDarkGray: #343A40;
    --colorActive: #D4AF37;
    --colorBlack: #00000;
`;

const spacings = `
    --spacingXSmall: 8px;
    --spacingSmall: 15px;
    --spacingRegular: 25px;
    --spacingMedium: 40px;
    --spacingBig1: 70px;
    --spacingBig2: 100px;
`;

const fontSizes = `
    --fontSizeXSmall: 12px;
    --fontSizeSmall: 14px;
    --fontSizeRegular: 16px;
    --fontSizeLead: 20px;
    --fontSizeBig1: 32px;
    --fontSizeBig2: 40px;
    --fontSizeBig3: 50px;
`;

const fx = `
    --transitionFast: 0.3s ease-out;
    --transitionBasic: 0.4s ease-out;
    --transitionSlow: 0.5s ease-out;
    --animationBasic: 0.4s;
`;

const GlobalStyles = createGlobalStyle`
/* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2')
    format('woff2');
    font-weight: normal;
    font-style: normal;
} */

html {
    ${colors}
    ${spacings}
    ${fontSizes}
    ${fx}
    
    box-sizing: border-box;
    font-size: 10px;
}

*, *:before, *:after {
    box-sizing: inherit;
}

body {
    padding: 0;
    margin: 0;
    font-size: 1.5em;
    line-height: 2;
}

a {
    text-decoration: none;
    color: var(--colorBlack);
}

a:hover {
    text-decoration: underline;
}



`;

export default GlobalStyles;
