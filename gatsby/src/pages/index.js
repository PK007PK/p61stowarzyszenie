import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import CategoryFilter from 'src/components/CategoryFilter/CategoryFilter';
import TagsFilter from 'src/components/TagsFilter/TagsFilter';
import Pagination from 'src/components/Pagination/Pagination';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionHero from 'src/components/SectionHero/SectionHero';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';
import PostsToDisplay from '../components/PostsToDisplay/PostsToDisplay';

const IndexPage = ({ data, pageContext }) => {
    if (pageContext.dirName === undefined) {
        pageContext.dirName = `/`;
    }
    const categories = data.category;
    const tags = data.tag;
    const { allPosts } = data;

    let postsToDisplay;
    switch (pageContext.pageType) {
        case 'allPaginatedPosts':
            postsToDisplay = allPosts;
            break;
        case 'allPostsInCategory':
            postsToDisplay = categories;
            break;
        case 'allPostsInTag':
            postsToDisplay = tags;
            break;
        default:
            postsToDisplay = allPosts;
    }

    const { pagesInSet } = data.sanitySiteTechConfig;
    const { title, description } = data.sanityPageDataHome;

    const textBlock = () => (
        <div>
            <h1>Stowarzyszenie EkoDoradztwo</h1>
            <p className="lead">{description}</p>
        </div>
    );

    const blogSection = (
        <>
            <CategoryFilter />
            <TagsFilter />
            <Pagination
                pageSize={pagesInSet}
                totalCount={postsToDisplay.totalCount}
                currentPage={pageContext.currentPage || 1}
                skip={pageContext.skip}
                base={pageContext.dirName}
                style={{ marginBottom: '25px' }}
            />
            <PostsToDisplay data={postsToDisplay.nodes.slice(0, pagesInSet)} />
        </>
    );

    return (
        <Layout>
            <SEO
                title={`Blog page ${pageContext.sellectionName ? `| ${pageContext.sellectionName}` : ''} ${
                    pageContext.currentPage ? `| ${pageContext.currentPage}` : ''
                }`}
            />
            <SectionHero leftComponent={textBlock} />
            <SectionOurProjects />
            <BootsContainer>
                <BootsRow>
                    <BootsColumn md={8}>{blogSection}</BootsColumn>
                </BootsRow>
            </BootsContainer>
        </Layout>
    );
};

export const pageQuery = graphql`
    query pagesQuery($selectionName: String, $skip: Int = 0, $pageSize: Int) {
        sanitySiteTechConfig {
            pagesInSet
        }
        sanityPageDataHome {
            title
            description
        }
        category: allSanityBlogPosts(
            limit: $pageSize
            skip: $skip
            sort: { order: DESC, fields: date }
            filter: { categories: { elemMatch: { name: { eq: $selectionName } } } }
        ) {
            totalCount
            nodes {
                name
                lead
                date(formatString: "")
                slug {
                    current
                }
                categories {
                    name
                }
                image {
                    asset {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
        tag: allSanityBlogPosts(
            limit: $pageSize
            skip: $skip
            sort: { order: DESC, fields: date }
            filter: { tags: { elemMatch: { name: { eq: $selectionName } } } }
        ) {
            totalCount
            nodes {
                name
                lead
                date(formatString: "")
                slug {
                    current
                }
                categories {
                    name
                }
                image {
                    asset {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
        allPosts: allSanityBlogPosts(limit: $pageSize, skip: $skip, sort: { order: DESC, fields: date }) {
            totalCount
            nodes {
                name
                lead
                date(formatString: "")
                slug {
                    current
                }
                categories {
                    name
                }
                image {
                    asset {
                        gatsbyImageData(width: 400)
                    }
                }
            }
        }
    }
`;

export default IndexPage;
