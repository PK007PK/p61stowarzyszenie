import React from 'react';
import { RiArticleLine } from 'react-icons/ri';

export default {
  name: 'pageDataHome',
  type: 'document',
  title: 'Home page data',
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