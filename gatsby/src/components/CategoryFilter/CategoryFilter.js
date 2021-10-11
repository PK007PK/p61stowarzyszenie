import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CategoryFilterStyle } from './CategoryFilter.style';

export default function CategoryFilter({ location }) {
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
    const checkLocation = location.pathname.split('/')[1];
    return (
        <CategoryFilterStyle>
            <Link
                to="/1#blog"
                style={checkLocation.includes('1') || checkLocation.includes('/') ? { color: 'red' } : null}
            >
                <h2>Aktualności</h2>
            </Link>
            {categories.map((category) => (
                <Link
                    to={`/${category.slug.current}/1#blog`}
                    style={checkLocation.includes(category.slug.current) ? { color: 'red' } : null}
                    key={category.slug.current}
                >
                    {category.name}
                </Link>
            ))}
        </CategoryFilterStyle>
    );
}
