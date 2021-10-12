import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { TagFilterStyle } from './TagFilter.style';

export default function TagsFilter({ location }) {
    const data = useStaticQuery(graphql`
        query {
            allSanityBlogPostsTags(sort: { order: ASC, fields: position }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const tags = data.allSanityBlogPostsTags.nodes;
    const checkLocation = location.pathname.split('/')[1];
    return (
        <TagFilterStyle>
            {tags.map((tag) => (
                <Link
                    to={`/${tag.slug.current}/1#blog`}
                    style={checkLocation.includes(tag.slug.current) ? { color: 'red' } : null}
                    key={tag.slug.current}
                >
                    {tag.name}
                </Link>
            ))}
        </TagFilterStyle>
    );
}
