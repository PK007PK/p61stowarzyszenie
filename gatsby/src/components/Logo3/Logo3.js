import React from 'react';
import logoSign from '../../assets/images/logoSignSvg3.svg';
import logoSign2 from '../../assets/images/logoSignSvg4.svg';
import { StyledLogo3 } from './Logo3.style';

const Logo = ({ className }) => (
    <StyledLogo3 className={className}>
        <img className="sign" src={logoSign2} alt="Stowarzyszenie EkoPartner" />
        <div className="textBlock">
            <div className="main">Eko</div>
            <div className="bottom">Monterzy</div>
        </div>
    </StyledLogo3>
);
export default Logo;
