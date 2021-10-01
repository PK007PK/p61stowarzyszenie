import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import logoSign from '../../assets/images/logoSignSvg3.svg';

const Logo = () => {
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

    const StyledLogo2 = styled.div`
        display: flex;
        font-family: Poppins;
        font-style: normal;

        .textBlock {
            margin-left: 7px;
        }

        .top {
            font-size: 16px;
            font-weight: 300;
            line-height: 16px;
            letter-spacing: -0.05em;
            text-transform: uppercase;
        }
        .main {
            font-size: 33px;
            font-weight: 900;
            line-height: 33px;
            letter-spacing: -0.03em;
            color: #134c0a;

            span {
                /* color: #e43b3b; */
                color: #47894b;
            }
        }

        .bottom {
            font-size: 10px;
            font-weight: 300;
            line-height: 10px;
            letter-spacing: -0.018em;
        }
    `;

    // const logoFile = data.sanitySiteSettings?.websiteLogo?.asset?.gatsbyImageData;
    return (
        <StyledLogo2>
            <img className="sign" src={logoSign} alt="Stowarzyszenie EkoPartner" />
            <div className="textBlock">
                <div className="top">Stowarzyszenie</div>
                <div className="main">
                    Eko<span>Partner</span>
                </div>
                <div className="bottom">ekologia / transformacja energetyczna</div>
            </div>
        </StyledLogo2>
    );
};

export default Logo;
