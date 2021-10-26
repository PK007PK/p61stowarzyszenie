import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { CategoryFilterStyle } from './CategoryFilter.style';

export default function CategoryFilter({ location }) {
    const data = useStaticQuery(graphql`
        {
            allSanityBlogPostsCategories(sort: { order: ASC, fields: position }) {
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
                style={
                    checkLocation === '' || checkLocation.includes('1') || checkLocation.includes('/')
                        ? { color: '#00BFA5' }
                        : null
                }
            >
                <h2 className="title">Aktualności</h2>
            </Link>
            <div className="links">
                {categories.map((category) => (
                    <Link
                        to={`/${category.slug.current}/1#blog`}
                        style={checkLocation.includes(category.slug.current) ? { color: '#00BFA5' } : null}
                        key={category.slug.current}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </CategoryFilterStyle>
    );
}
