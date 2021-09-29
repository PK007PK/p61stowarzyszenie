import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CategoryFilterStyle } from './CategoryFilter.style';

export default function CategoryFilter() {
    const data = useStaticQuery(graphql`
        {
            allSanityBlogPostsCategories(sort: { order: ASC, fields: name }) {
                nodes {
                    name
                    slug {
                        current
                    }
                }
            }
        }
    `);

    const categories = data.allSanityBlogPostsCategories.nodes;

    return (
        <CategoryFilterStyle>
            <Link to="/1#blog">
                <h2>Aktualności</h2>
            </Link>
            {categories.map((category) => (
                <Link
                    to={`/${category.slug.current}/1#blog`}
                    activeStyle={{ color: 'red' }}
                    key={category.slug.current}
                >
                    {category.name}
                </Link>
            ))}
        </CategoryFilterStyle>
    );
}
