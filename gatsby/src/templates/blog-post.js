import React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import BlockContent from '@sanity/block-content-to-react';
import Layout from 'src/components/Layout/Layout';
import SEO from '../components/SEO/SEO';

const BlogPostTemplate = ({ data }) => {
    const post = data.sanityBlogPosts;
    const siteTitle = data.site.siteMetadata?.title || `Title`;
    const { previous, next } = data;

    return (
        <Layout>
            <SEO title={post.name} description={post.lead} />
            <article className="blog-post" itemScope itemType="http://schema.org/Article">
                <header>
                    <h1 itemProp="headline">{post.name}</h1>
                    <p>{post.date}</p>
                </header>
                <BlockContent blocks={post._rawRichText} dataset="production" url="" projectId="9311goma" />
                <hr />
            </article>
            <nav className="blog-post-nav">
                <ul
                    style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                    }}
                >
                    <li>
                        {previous && (
                            <Link to={`/${previous.slug.current}`} rel="prev">
                                ← {previous.name}
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link to={`/${next.slug.current}`} rel="next">
                                {next.name} →
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
        site {
            siteMetadata {
                title
            }
        }
        sanityBlogPosts(id: { eq: $id }) {
            id
            date
            name
            _rawRichText
        }
        previous: sanityBlogPosts(id: { eq: $previousPostId }) {
            slug {
                current
            }
            name
        }
        next: sanityBlogPosts(id: { eq: $nextPostId }) {
            slug {
                current
            }
            name
        }
    }
`;
