import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  icon: () => <FiSettings />,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Language',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    // {
    //   name: 'author',
    //   type: 'reference',
    //   description: 'Publish an author and set a reference to them here.',
    //   title: 'Author',
    //   to: [{ type: 'author' }],
    // },
  ],
};
