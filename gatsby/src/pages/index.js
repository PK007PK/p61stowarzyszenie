import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import CategoryFilter from 'src/components/CategoryFilter/CategoryFilter';
import TagsFilter from 'src/components/TagsFilter/TagsFilter';
import Pagination from 'src/components/Pagination/Pagination';

import SectionHero from 'src/components/SectionHero/SectionHero';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';

const IndexPage = ({ data, pageContext }) => {
    if (pageContext.dirName === undefined) {
        pageContext.dirName = `/blog`;
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
            <h1>Stowarzyszenie XYZ</h1>
            <p className="lead">{description}</p>
        </div>
    );

    const DisplayPosts = () => (
        <ul style={{ listStyle: `none`, paddingLeft: 0 }}>
            {postsToDisplay.nodes
                .filter((post) => post.date !== null)
                .map((post) => (
                    <li key={post.slug.current}>
                        <h3>{post.name}</h3>
                        <p>{post.lead}</p>
                        <Link to={`/${post.slug.current}`} itemProp="url">
                            More
                        </Link>
                    </li>
                ))}
        </ul>
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
            <h1>Blog page</h1>
            <CategoryFilter />
            <TagsFilter />
            <DisplayPosts />
            <Pagination
                pageSize={pagesInSet}
                totalCount={postsToDisplay.totalCount}
                currentPage={pageContext.currentPage || 1}
                skip={pageContext.skip}
                base={pageContext.dirName}
            />
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
                slug {
                    current
                }
                date
                name
                lead
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
                slug {
                    current
                }
                date
                name
                lead
            }
        }
        allPosts: allSanityBlogPosts(limit: $pageSize, skip: $skip, sort: { order: DESC, fields: date }) {
            totalCount
            nodes {
                slug {
                    current
                }
                date
                name
                lead
            }
        }
    }
`;

export default IndexPage;
