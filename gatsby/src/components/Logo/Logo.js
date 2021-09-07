import { WiSunset } from '@react-icons/all-files/wi/WiSunset';
import styled from 'styled-components';

const Logo = styled(WiSunset)`
    color: --var(colorLogoRed);
    width: ${({ size }) => size || 35}px;
    height: 35px;
`;

export default Logo;
