import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default function TagsFilter() {
  const data = useStaticQuery(graphql`
    query {
      allSanityBlogPostsTags (sort: {order: ASC, fields: name}) {
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
    <div>
      {tags.map((tag) => (
        <Link
          to={`/${tag.slug.current}/1`}
          activeStyle={{ color: 'red' }}
          key={tag.slug.current}
        >
          {tag.name}
        </Link>
      ))}
    </div>
  );
}
