import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'pageDataBlog',
  type: 'document',
  title: 'Blog page data',
  icon: () => <RiArticleLine />,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
  ],
};
