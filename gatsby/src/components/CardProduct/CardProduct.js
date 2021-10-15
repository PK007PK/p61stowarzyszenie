import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CardProductStyles } from './CardProduct.styles.js';

const CardProduct = ({ data, className }) => {
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
    const { projectName: title, projectImage, color, backgroundColor, projectSubtitle } = data;
    const imgSource = projectImage?.asset?.gatsbyImageData;
    return (
        <CardProductStyles color={color} backgroundColor={backgroundColor} className={className}>
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
                <p className="subTitle">{projectSubtitle}</p>
            </div>
        </CardProductStyles>
    );
};

export default CardProduct;
