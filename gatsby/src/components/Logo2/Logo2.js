import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logoSign from '../../assets/images/logoSignSvg3.svg';
import { StyledLogo2 } from './Logo2.style';

const Logo = () => (
    // const data = useStaticQuery(graphql`
    //     {
    //         sanitySiteSettings {
    //             websiteLogo {
    //                 asset {
    //                     gatsbyImageData
    //                 }
    //             }
    //         }
    //     }
    // `);logoSignSvg

    <StyledLogo2>
        <img className="sign" src={logoSign} alt="Stowarzyszenie EkoPartner" />
        <div className="textBlock">
            <div className="top">Stowarzyszenie</div>
            <div className="main">
                Eko<span>Monterzy</span>
            </div>
            <div className="bottom">ekologia / transformacja energetyczna</div>
        </div>
    </StyledLogo2>
);
export default Logo;
