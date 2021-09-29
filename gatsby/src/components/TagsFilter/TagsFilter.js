import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { TagFilterStyle } from './TagFilter.style';

export default function TagsFilter() {
    const data = useStaticQuery(graphql`
        query {
            allSanityBlogPostsTags(sort: { order: ASC, fields: name }) {
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

    return (
        <TagFilterStyle>
            {tags.map((tag) => (
                <Link to={`/${tag.slug.current}/1#blog`} activeStyle={{ color: 'red' }} key={tag.slug.current}>
                    {tag.name}
                </Link>
            ))}
        </TagFilterStyle>
    );
}
