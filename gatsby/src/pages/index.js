import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'src/components/Layout/Layout';
import SEO from 'src/components/SEO/SEO';
import FilterCategory from 'src/components/FilterCategory/FilterCategory';
import FilterTags from 'src/components/FilterTags/FilterTags';
import Pagination from 'src/components/Pagination/Pagination';
import SectionHero from 'src/components/SectionHero/SectionHero';
import Search from 'src/components/search';
import { BootsContainer, BootsRow, BootsColumn } from 'src/components/BootsElements/BootsElements';
import SectionOurProjects from '../components/SectionOurProjects/SectionOurProjects';
import PostsToDisplay from '../components/PostsToDisplay/PostsToDisplay';
import HeroTextBlock from '../components/HeroTextBlock/HeroTextBlock';
import HeroBackImage from '../components/HeroBackImage/HeroBackImage';
import Newsletter from '../components/Newsletter/Newsletter';

const searchIndices = [{ name: `Pages`, title: `Pages` }];

const IndexPage = ({ data, pageContext, location }) => {
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
    const {
        title,
        tags: heroTags,
        description,
        image: {
            asset: { gatsbyImageData },
        },
    } = data.sanityPageHome;

    return (
        <Layout>
            <SEO
                title={`EkoMonterzy ${pageContext.selectionName ? `| ${pageContext.selectionName}` : ''} ${
                    pageContext.currentPage ? `| ${pageContext.currentPage}` : ''
                }`}
            />
            <HeroBackImage data={gatsbyImageData} />
            <SectionHero
                homePage
                leftComponent={() => <HeroTextBlock title={title} heroTags={heroTags} description={description} />}
            />
            <SectionOurProjects />
            <BootsContainer style={{ marginTop: '50px' }}>
                <BootsRow id="blog" between>
                    <BootsColumn md={8}>
                        <FilterCategory location={location} />
                        <FilterTags location={location} />
                        <Pagination
                            pageSize={pagesInSet}
                            totalCount={postsToDisplay.totalCount}
                            currentPage={pageContext.currentPage || 1}
                            skip={pageContext.skip}
                            base={pageContext.dirName}
                            style={{ marginBottom: '25px' }}
                            location={location}
                        />
                    </BootsColumn>
                    <BootsColumn md={4}>
                        <h3 style={{ marginTop: 'var(--spacingSmall)', textAlign: 'center' }}>Wyszukaj w serwisie</h3>
                        <Search staticInput indices={searchIndices} />
                    </BootsColumn>
                </BootsRow>
                <BootsRow id="blog" between>
                    <BootsColumn md={8}>
                        <PostsToDisplay data={postsToDisplay.nodes.slice(0, pagesInSet)} />
                        <Pagination
                            pageSize={pagesInSet}
                            totalCount={postsToDisplay.totalCount}
                            currentPage={pageContext.currentPage || 1}
                            skip={pageContext.skip}
                            base={pageContext.dirName}
                            style={{ marginBottom: '25px' }}
                        />
                    </BootsColumn>
                    <BootsColumn md={4}>
                        <Newsletter />
                    </BootsColumn>
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
        sanityPageHome {
            title
            tags
            description
            image {
                asset {
                    gatsbyImageData(width: 400)
                }
            }
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
