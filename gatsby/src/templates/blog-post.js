import React from 'react';
import { Link, graphql } from 'gatsby';
import SectionHero from 'src/components/SectionHero/SectionHero';
import BlockContent from '@sanity/block-content-to-react';
import Layout from 'src/components/Layout/Layout';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SEO from '../components/SEO/SEO';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import HeroBreakingNews from '../components/HeroBreakingNews/HeroBreakingNews';
import AsideBlogPostSwitch from '../components/AsideBlogPostSwitch/AsideBlogPostSwitch';

const BlogPostTemplate = ({ data }) => {
    const { previous, next } = data;
    const {
        name,
        lead,
        date,
        _rawRichText,
        image: {
            asset: { gatsbyImageData },
        },
        components,
    } = data.sanityBlogPosts;

    const siteTitle = data.site.siteMetadata?.title || `Title`;

    const textBlock = () => (
        <div>
            <h1>{name}</h1>
            <p className="lead">{lead}</p>
            <time className="lead">{date}</time>
        </div>
    );
    const componentsArray = components.map((item) => item.sanityId);
    console.log(componentsArray);
    return (
        <Layout>
            <SEO title={name} description={lead} />
            <article className="blog-post" itemScope itemType="http://schema.org/Article">
                <HeroBackImage data={gatsbyImageData} />
                <SectionHero blogPost leftComponent={textBlock} />
                <BootsContainer>
                    <BootsRow between style={{ marginTop: '50px' }}>
                        <BootsColumn md={7}>
                            <BlockContent blocks={_rawRichText} dataset="production" url="" projectId="9311goma" />
                        </BootsColumn>
                        <BootsColumn md={4}>
                            <AsideBlogPostSwitch data={componentsArray} />
                        </BootsColumn>
                    </BootsRow>
                </BootsContainer>
                <hr style={{ marginTop: '50px' }} />
            </article>
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
