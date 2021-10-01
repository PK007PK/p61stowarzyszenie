import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { CardSimpleStyles } from './CardSimple.styles.js';

const CardSimple = ({ data }) => {
    const { projectName: title, projectImage, color, backgroundColor } = data;
    const imgSource = projectImage?.asset?.gatsbyImageData;
    return (
        <CardSimpleStyles color={color} backgroundColor={backgroundColor}>
            <GatsbyImage
                className="picture"
                image={imgSource}
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
