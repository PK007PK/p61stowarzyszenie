import React from 'react';
import { FiSettings } from 'react-icons/fi';

export default {
  name: 'siteTechConfig',
  type: 'document',
  title: 'Site Config',
  icon: () => <FiSettings />,
  fields: [
    {
      name: 'pagesInSet',
      type: 'number',
      title: 'Number of article entries in single blog page',
    },
  ],
};
