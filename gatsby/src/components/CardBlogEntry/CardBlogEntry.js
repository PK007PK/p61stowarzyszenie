import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardBlogEntryStyle } from './CardBlogEntry.style';

const CardBlogEntry = ({ data }) => {
    const {
        name,
        lead,
        date,
        image: {
            asset: { gatsbyImageData },
        },
    } = data;
    return (
        <CardBlogEntryStyle>
            <GatsbyImage
                className="picture"
                image={gatsbyImageData}
                placeholder="blurred"
                alt={name}
                formats={['auto', 'webp']}
                quality={50}
            />
            <div className="txtBlock">
                <h3 className="title">{name}</h3>
                <time dateTime={date}>{date}</time>
                <p className="description">{lead}</p>
            </div>
        </CardBlogEntryStyle>
    );
};

export default CardBlogEntry;
