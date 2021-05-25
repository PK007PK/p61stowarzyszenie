import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CategoryFilter from '../components/CategoryFilter';
import TagsFilter from '../components/TagsFilter';
import Pagination from '../components/Pagination';

import projectConfig from '../projectConfig';

const BlogPage = ({ data, pageContext }) => {
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

  // console.log("selectionName ", pageContext.selectionName);
  // console.log("postsToDisplay ", postsToDisplay);

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
        title={`Blog page ${
          pageContext.sellectionName ? `| ${pageContext.sellectionName}` : ''
        } ${pageContext.currentPage ? `| ${pageContext.currentPage}` : ''}`}
      />
      <h1>Blog page</h1>
      <CategoryFilter />
      <TagsFilter />
      <DisplayPosts />
      <Pagination
        pageSize={projectConfig.pagesAmountInSet}
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
    site {
      siteMetadata {
        title
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
    allPosts: allSanityBlogPosts(
      limit: $pageSize
      skip: $skip
      sort: { order: DESC, fields: date }
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
  }
`;

export default BlogPage;
