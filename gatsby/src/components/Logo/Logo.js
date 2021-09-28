import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import logoFile from '../../assets/images/LogoPNG15.png';

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
    // `);

    const StyledGatsbyImage = styled(GatsbyImage)`
        /* width: 350px;
        height: 70px; */
    `;

    // const logoFile = data.sanitySiteSettings?.websiteLogo?.asset?.gatsbyImageData;
    return (
        <img
            style={{
                display: 'block',
                width: '200px',
            }}
            alt="Logo"
            src={logoFile}
        />
    );
};

export default Logo;
