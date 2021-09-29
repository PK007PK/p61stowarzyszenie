import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`


.slick-slide {
  padding-right: 5px;
}

.lead {
  font-size: 24px;
  letter-spacing: -5%;
  font-weight: 400;
}

.fx-txt-underline {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -3px;
      left: 0;
      background-color: var(--colorActive2);
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.1s ease-in-out;
    }     

    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }

    &:focus {
      outline: none !important;
      border: none !important;
    }

    &:focus::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
`;

export default CustomStyles;
