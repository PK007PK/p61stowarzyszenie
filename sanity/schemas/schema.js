// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import siteSettings from './siteSettings';
import siteTechConfig from './siteTechConfig';
import pageDataHome from './pageDataHome';
import pageDataBlog from './pageDataBlog';
import blogPosts from './blogPosts';
import blogPostsCategories from './blogPostsCategories';
import blogPostsComponents from './blogPostsComponents';
import blogPostsTags from './blogPostsTags';
import projectItem from './projectItem';
import allProjectsData from './allProjectsData';
import galleryItem from './galleryItem';
import gallery from './gallery';
import testimonials from './testimonials';
import testimonialItem from './testimonialItem';
import oNasPage from './oNasPage';
import kontaktPage from './kontaktPage';
import menuData from './menuData';
import menuItem from './menuItem';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    siteTechConfig,
    gallery,
    galleryItem,
    pageDataHome,
    pageDataBlog,
    blogPosts,
    blogPostsCategories,
    blogPostsComponents,
    blogPostsTags,
    projectItem,
    allProjectsData,
    testimonials,
    testimonialItem,
    oNasPage,
    kontaktPage,
    menuData,
    menuItem,
  ]),
});
