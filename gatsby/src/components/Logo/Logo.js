import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    const data = useStaticQuery(graphql`
        {
            sanitySiteSettings {
                websiteLogo {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);

    const StyledGatsbyImage = styled(GatsbyImage)`
        /* width: 350px;
        height: 70px; */
    `;

    const logoFile = data.sanitySiteSettings?.websiteLogo?.asset?.gatsbyImageData;
    return (
        <StyledGatsbyImage
            image={logoFile}
            placeholder="tracedSVG"
            alt="Logo"
            formats={['auto', 'webp']}
            quality={100}
        />
    );
};

export default Logo;
