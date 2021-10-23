import React from 'react';
import { Link, graphql } from 'gatsby';
import SectionBlogPostHero from 'src/components/SectionBlogPostHero/SectionBlogPostHero';
import BlockContent from '@sanity/block-content-to-react';
import Layout from 'src/components/Layout/Layout';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SEO from '../components/SEO/SEO';
import AsideBlogPostSwitch from '../components/AsideBlogPostSwitch/AsideBlogPostSwitch';
import { ArticleStyling } from '../components/ArticleStyling/ArticleStyling';

const BlogPostTemplate = ({ data }) => {
    const { previous, next } = data;
    const { name, lead, date, _rawRichText, components } = data.sanityBlogPosts;
    const gatsbyImageData = data?.sanityBlogPosts?.image?.asset?.gatsbyImageData;

    const siteTitle = data.site.siteMetadata?.title || `Title`;

    const textBlock = () => (
        <div>
            <time className="lead">{date}</time>
            <h1>{name}</h1>
            <p className="lead">{lead}</p>
        </div>
    );
    const componentsArray = components.map((item) => item.sanityId);
    return (
        <Layout>
            <SEO title={name} description={lead} />
            <ArticleStyling className="blog-post" itemScope itemType="http://schema.org/Article">
                <SectionBlogPostHero leftComponent={textBlock} data={gatsbyImageData} />
                <BootsContainer>
                    <BootsRow between style={{ margin: '50px 0 50px' }}>
                        <BootsColumn md={7}>
                            <BlockContent blocks={_rawRichText} dataset="production" url="" projectId="9311goma" />
                        </BootsColumn>
                        <BootsColumn md={4}>
                            <AsideBlogPostSwitch title={name} excerpt={lead} data={componentsArray} />
                        </BootsColumn>
                    </BootsRow>
                </BootsContainer>
                <hr style={{ marginTop: '50px' }} />
            </ArticleStyling>
            <BootsContainer>
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
            </BootsContainer>
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
            image {
                asset {
                    gatsbyImageData
                }
            }
            components {
                sanityId
            }
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
