import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Logo3 from 'src/components/Logo3/Logo3';
import { useStaticQuery, graphql } from 'gatsby';
import { CardSimpleStyles } from './CardSimple.styles.js';

const CardSimple = ({ data }) => {
    const query = useStaticQuery(graphql`
        {
            sanitySiteTechConfig {
                blankImgPLaceholder {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    `);
    const {
        sanitySiteTechConfig: {
            blankImgPLaceholder: {
                asset: { gatsbyImageData: placeholder },
            },
        },
    } = query;
    const { projectName: title, projectImage, color, backgroundColor } = data;
    const imgSource = projectImage?.asset?.gatsbyImageData;
    return (
        <CardSimpleStyles color={color} backgroundColor={backgroundColor}>
            <GatsbyImage
                className="image"
                image={imgSource || placeholder}
                placeholder="blurred"
                alt={title}
                formats={['auto', 'webp']}
                quality={50}
            />

            <div className="textBlock">
                <h3 className="title">{title}</h3>
            </div>
        </CardSimpleStyles>
    );
};

export default CardSimple;
