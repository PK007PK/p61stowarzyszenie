import path from 'path';
import projectConfig from '../projectConfig';

export async function turnCategoriesIntoPages({ graphql, actions }) {
  // 1. Get the template
  const categoryTemplate = path.resolve('./src/pages/blog.js');

  // 2. query all the categories
  const { data } = await graphql(`
    query {
      allSanityBlogPostsCategories {
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
  data.allSanityBlogPostsCategories.nodes.forEach((category) => {
    async function countPost() {
      const selectCategory = `"${category.name}"`;

      const categoryDetails = await graphql(`
          query myQuery {
            allSanityBlogPosts(
            filter: {
              categories: {elemMatch: {name: {eq: ${selectCategory}}}}})
            {
              totalCount
            }
          }
        `);
      return categoryDetails;
    }

    countPost().then((result) => {

      const pageSize = projectConfig.pagesAmountInSet;
      const allPostsInCategory = result.data.allSanityBlogPosts.totalCount;

      const pageCount = Math.ceil(allPostsInCategory / pageSize);

      Array.from({ length: pageCount }).forEach((_, i) => {
        actions.createPage({
          path: `/${category.slug.current}/${i + 1}`,
          component: categoryTemplate,
          context: {
            skip: i * pageSize,
            currentPage: i + 1,
            pageSize,
            selectPosts: `/${category.slug.current}/i`,
            selectionName: category.name,
            pageType: 'allPostsInCategory',
            dirName: `/${category.slug.current}`,
          },
        });
      });
    });
  });
}
