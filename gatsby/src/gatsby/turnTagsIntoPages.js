import path from 'path';
import projectConfig from '../projectConfig';

export async function turnTagsIntoPages({ graphql, actions }) {
  // 1. Get the template
  const tagTemplate = path.resolve('./src/pages/blog.js');

  // 2. query all the categories
  const { data } = await graphql(`
    query {
      allSanityBlogPostsTags (sort: {order: ASC, fields: name}) {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // 3. createPage
  data.allSanityBlogPostsTags.nodes.forEach((tag) => {
    async function countPostForTag() {
      const selectTag = `"${tag.name}"`;

      const tagDetails = await graphql(`
          query myQuery {
            allSanityBlogPosts(
              filter: {
                tags: {elemMatch: {name: {eq: ${selectTag}}}}
            }) 
            {
              totalCount
            }
          }
        `);
      return tagDetails;
    }

    countPostForTag().then((result) => {
      const pageSize = projectConfig.pagesAmountInSet;
      const allPostsForTag = result.data.allSanityBlogPosts.totalCount;
      const pageCount = Math.ceil(allPostsForTag / pageSize);

      Array.from({ length: pageCount }).forEach((_, i) => {
        actions.createPage({
          path: `/${tag.slug.current}/${i + 1}`,
          component: tagTemplate,
          context: {
            skip: i * pageSize,
            currentPage: i + 1,
            pageSize,
            selectPosts: `/${tag.slug.current}/i`,
            selectionName: tag.name,
            pageType: 'allPostsInTag',
            dirName: `/${tag.slug.current}`,
          },
        });
      });
    });
  });
}
