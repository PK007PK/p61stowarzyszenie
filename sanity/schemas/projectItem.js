export default {
  title: 'Project item',
  name: 'projectItem',
  type: 'object',
  fields: [
    {
      title: 'Project name',
      name: 'projectName',
      type: 'string',
    },
    {
      title: 'Project subtitle',
      name: 'projectSubtitle',
      type: 'string',
    },
    {
      title: 'Page slug',
      name: 'pageSlug',
      type: 'string',
    },
    {
      title: 'Grupa',
      name: 'group',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Post tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPostsTags' }] }],
    },
  ],
  preview: {
    select: {
      title: 'projectName',
    },
    prepare: (selection) => ({
      title: selection.title,
    }),
  },
};
